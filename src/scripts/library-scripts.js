import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { eng, ua } from "./dictionary"


export class MovieLibrary {
	constructor() {
		const watchedList = localStorage.getItem("Watched_List");
		if (watchedList) {
			this.watched = JSON.parse(watchedList);
		} else {
			this.watched = {}
		}
		const queueList = localStorage.getItem("Queue_List");
		if (queueList) {
			this.queue = JSON.parse(queueList);
		} else {
			this.queue = {}
		}
		this.param = {
			option: "",
			lang: '&language=en',
			imageLang: '&include_image_language=en',
			region: '&region=en-US',
			langText: localStorage.getItem("siteOptions") == "eng" ? eng : ua,
		}
	}
	isWatched(id) {
		if (Object.keys(this.watched).indexOf(`${id}`) >= 0) {

			return true;
		}
		return false;
	}
	isQueue(id) {
		if (Object.keys(this.queue).indexOf(`${id}`) >= 0) {
			return true;
		}
		return false;
	}
	addToWatched(id, notify = true) {
		if (this.isWatched(id)) {
			Notify.info(this.param.langText.notifyInfoWatched);
			return;
		}
		this.param.option = `/movie/${id}`;
		window.filmoteka.fetchFilms(this.param)
			.then(({ id, poster_path, release_date, genres, title, vote_average }) => {
				const year = new Date(release_date).getFullYear()
				let genreNames = genres.map(el => el.name).join(", ")
				this.watched[id] = { id, poster_path, year, genreNames, title, vote_average }
				this.#updateStorage("Watched_List", this.watched);
				if (notify) Notify.success(this.param.langText.notifySuccessWatched);
			})
			.catch(error => {
				console.log(error);
				Notify.failure(this.param.langText.notifyFailureWatched);
			})
	}
	addToQueue(id, notify = true) {
		if (this.isQueue(id)) {
			Notify.info(this.param.langText.notifyInfoQueue);
			return;
		}
		this.param.option = `/movie/${id}`;
		window.filmoteka.fetchFilms(this.param)
			.then(({ id, poster_path, release_date, genres, title, vote_average }) => {
				const year = new Date(release_date).getFullYear()
				let genreNames = genres.map(el => el.name).join(", ")
				this.queue[id] = { id, poster_path, year, genreNames, title, vote_average }
				this.#updateStorage("Queue_List", this.queue);
				if (notify) Notify.success(this.param.langText.notifySuccessQueue);
			})
			.catch(error => Notify.failure(this.param.langText.notifyFailureQueue))
	}

	removeFromWatched(id) {
		if (this.isWatched(id)) {
			delete this.watched[id];
			this.#updateStorage("Watched_List", this.watched);
			Notify.warning(this.param.langText.notifyDelWatched);
			
			return;
		} else {
			Notify.failure(this.param.langText.notifyNotWatched);
		}
	}
	removeFromQueue(id) {
		if (this.isQueue(id)) {
			delete this.queue[id];
			this.#updateStorage("Queue_List", this.queue);
			Notify.warning(this.param.langText.notifyDelQueue);
			return;
		} else {
			Notify.failure(this.param.langText.notifyNotQueue);
		}
	}

	getWatched() {
		return Object.values(this.watched);
	}
	getQueue() {
		return Object.values(this.queue);
	}

	#updateStorage(key, data) {
		if (Object.keys(data).length > 0) {
			localStorage.setItem(key, JSON.stringify(data));
			window.fireBase.saveData(key, data);
		} else {
			localStorage.removeItem(key);
			window.fireBase.saveData(key, {})
		}
		window.modal.checkLibrary()
	}
	saveData() {
		if (Object.keys(this.queue).length > 0) {
			localStorage.setItem("Queue_List", JSON.stringify(this.queue));
		}
		if (Object.keys(this.watched).length > 0) {
			localStorage.setItem("Watched_List", JSON.stringify(this.watched));
		}
	}
	updateLang() {
		if (localStorage.getItem("siteOptions") == "ua") {
			this.param.lang = '&language=uk';
			this.param.imageLang = '&include_image_language=uk';
			this.param.region = '&region=uk-UA';
		} else {
			this.param.lang = '&language=en';
			this.param.imageLang = '&include_image_language=en';
			this.param.region = '&region=en-US';
		}
		this.#updateSaves()
		if (window.fireBase.userData) {
			document.querySelector('.login-btn').textContent = window.fireBase.userData.displayName;
		}
	}
	#updateSaves() {
		const watchedId = Object.keys(this.watched);
		this.watched = {};
		const queueId = Object.keys(this.queue);
		this.queue = {};
		watchedId.forEach(id => this.addToWatched(id, false));
		queueId.forEach(id => this.addToQueue(id, false));
	}
	markupWatched() {
		if (Object.keys(this.watched).length <= 0) {
			return "";
		}
		return this.getWatched().map(({ id, poster_path, year, genreNames, title, vote_average }) => {
			let imgLink;
			if (!poster_path) {
				imgLink = 'https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg';
			} else {
				imgLink = `https://image.tmdb.org/t/p/w400${poster_path}`;
			}
			return `<li class="table-item film-card__item" data-id="${id}">
                            <div class="film-card__box-img">
                            <img class="film-card__img" src="${imgLink}" alt="${title}" loading="lazy" width="350"/>
                            </div>
                            <div class="film-card__box-info">
                              <h3 class="film-card__title">${title}</h3>
                              <p class="film-card__text">
                                ${genreNames} | ${year}<span class="film-card__rating">${Math.round(vote_average * 100) / 100
				}</span>
                              </p>
                            </div>
                          </li> `;
		}).join('');
	}
	markupQueue() {
		if (Object.keys(this.queue).length <= 0) {
			return "";
		}
		return this.getQueue().map(({ id, poster_path, year, genreNames, title, vote_average }) => {
			let imgLink;
			if (!poster_path) {
				imgLink = 'https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg';
			} else {
				imgLink = `https://image.tmdb.org/t/p/w400${poster_path}`;
			}
			return `<li class="table-item film-card__item" data-id="${id}">
                            <div class="film-card__box-img">
                            <img class="film-card__img" src="${imgLink}" alt="${title}" loading="lazy" width="350"/>
                            </div>
                            <div class="film-card__box-info">
                              <h3 class="film-card__title">${title}</h3>
                              <p class="film-card__text">
                                ${genreNames} | ${year}<span class="film-card__rating">${Math.round(vote_average * 100) / 100
				}</span>
                              </p>
                            </div>
                          </li> `;
		}).join('');
	}
}
