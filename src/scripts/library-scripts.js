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

	addToWatched(id) {
		this.#updateStorage("Watched_List", id);
	}
	addToQueue(id) {
		this.#updateStorage("Queue_List", id);
	}

	removeFromWatched(id) {
		this.#updateStorage("Watched_List", id);
	}
	removeFromQueue(id) {
		this.#updateStorage("Queue_List", id);
	}

	getWatched(id) {
		return Object.values(this.watched);
	}
	getQueue(id) {
		return Object.values(this.queue);
	}

	#updateStorage(key, data = "") {
		if (data) {
			localStorage.setItem(key, JSON.stringify(data));
		} else {
			localStorage.removeItem(key);
		}
	}
}
