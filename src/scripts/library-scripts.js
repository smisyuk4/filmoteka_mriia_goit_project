import { refs } from './refs'
import { Filmoteka } from './fetch-api'
import Notiflix from 'notiflix';

const filmoteka = new Filmoteka()

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
		if (Object.keys(this.watched).indexOf(id) >= 0) {
			return true;
		}
		return false;
	}
	isQueue(id) {
		if (Object.keys(this.queue).indexOf(id) >= 0) {
			return true;
		}
		return false;
	}
	addToWatched(id) {
		if (this.isWatched(id)) {

			return;
		}
		filmoteka.fetchFilms({ option: `/movie/${id}` })
			.then(({ backdrop_path, release_date, genres, popularity, title, vote_average }) => {
				console.log(backdrop_path, new Date(release_date).getFullYear(), genres.map(el => el.name).join(", "), popularity, title, vote_average);
				this.#updateStorage("Watched_List", this.watched);
			})
			.catch(error => console.log(error))
	}
	addToQueue(id) {
		this.#updateStorage("Queue_List", id);
	}

	removeFromWatched(id) {
		if (this.isWatched(id)) {
			delete this.watched.id;
			this.#updateStorage("Watched_List", this.watched);
		}
	}
	removeFromQueue(id) {
		if (this.isQueue(id)) {
			delete this.queue.id;
			this.#updateStorage("Watched_List", this.queue);
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
		} else {
			localStorage.removeItem(key);
		}
	}
}
