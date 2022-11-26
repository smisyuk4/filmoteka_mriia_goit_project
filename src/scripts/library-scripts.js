import { Filmoteka } from './fetch-api'
import { FireBaseData } from './firebase-auth'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const filmoteka = new Filmoteka()
const FireBase = new FireBaseData
export class MovieLibrary {
	constructor() {
		const watchedList = localStorage.getItem("Watched_List");
		if (watchedList) {
			this.watched = JSON.parse(watchedList);
		} else {
			this.watched = {};
		}
		const queueList = localStorage.getItem("Queue_List");
		if (queueList) {
			this.queue = JSON.parse(queueList);
		} else {
			this.queue = {};
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
	addToWatched(id) {
		if (this.isWatched(id)) {
			Notify.info('Movie already in watched');
			return;
		}
		filmoteka.fetchFilms({ option: `/movie/${id}` })
			.then(({ id, backdrop_path, release_date, genres, popularity, title, vote_average }) => {
				const year = new Date(release_date).getFullYear()
				const genreNames = genres.map(el => el.name).join(", ")
				this.watched[id] = { id, backdrop_path, year, genreNames, popularity, title, vote_average }
				this.#updateStorage("Watched_List", this.watched);
				Notify.success('Movie added to watched');
			})
			.catch(error => {
				console.log(error);
				Notify.warning('Some went wrong when ading to watched. Please try again.');
			})
	}
	addToQueue(id) {
		if (this.isQueue(id)) {
			Notify.info('Movie already in queue');
			return;
		}
		filmoteka.fetchFilms({ option: `/movie/${id}` })
			.then(({ id, backdrop_path, release_date, genres, popularity, title, vote_average }) => {
				const year = new Date(release_date).getFullYear()
				const genreNames = genres.map(el => el.name).join(", ")
				this.queue[id] = { id, backdrop_path, year, genreNames, popularity, title, vote_average }
				this.#updateStorage("Queue_List", this.queue);
				Notify.success('Movie added to queue');
			})
			.catch(error => Notify.warning('Some went wrong when ading to queue. Please try again.'))
	}

	removeFromWatched(id) {
		if (this.isWatched(id)) {
			delete this.watched[id];
			this.#updateStorage("Watched_List", this.watched);
			Notify.success('Movie deleted from watched');
			return
		}
		Notify.warning('Movie not found in watched');
	}
	removeFromQueue(id) {
		if (this.isQueue(id)) {
			delete this.queue[id];
			this.#updateStorage("Queue_List", this.queue);
			Notify.success('Movie deleted from queue');
			return
		}
		Notify.warning('Movie not found in queue');
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
			FireBase.saveData(key, data);
		} else {
			localStorage.removeItem(key);
			FireBase.saveData(key, {})
		}
	}
}
