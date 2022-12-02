import { refs } from './refs';
import { setLagnuage, changeLagnuage } from './changeLagnuage';
import { hidenButton, upClick } from './scroll-up';
import { changeColor, setColor } from './color-select';
import { MovieLibrary } from './library-scripts';
import { FireBaseData } from './firebase-auth';
import { Filmoteka } from './fetch-api';
import { Modal } from './modal-film';
import {spinerStart, spinerStop } from './loader';

window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();
window.modal = new Modal();

window.loader = spinerStart;
window.loaderRemove = spinerStop;

window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

refs.headerButtons.addEventListener('click', e => {
	const target = e.target
	if (target.nodeName == "BUTTON") {
		if (target.dataset.action=="watched") {
			window.location.hash = ""
			refs.container.innerHTML = window.movieLibrary.markupWatched()
			refs.headerButtons.classList.add('watched')
		}
		if (target.dataset.action=="queue") {
			window.location.hash = "queue"
			refs.container.innerHTML = window.movieLibrary.markupQueue()
			refs.headerButtons.classList.remove('watched')
		}
	}
});
if (window.location.hash == "#queue") {
	refs.headerButtons.classList.remove('watched')
	refs.headerButtons.classList.remove('start')
	refs.container.innerHTML=window.movieLibrary.markupQueue()
} else {
	refs.headerButtons.classList.remove('start')
	refs.headerButtons.classList.add('watched')
	refs.container.innerHTML=window.movieLibrary.markupWatched()
}
// Функція зміни мови
setLagnuage(); 

// Функція зміни кольору
setColor();
// call on init to share window.filmoteka object setLagnuageLibrary

//рендер бібліотеки користувача
window.modal.checkLibrary()