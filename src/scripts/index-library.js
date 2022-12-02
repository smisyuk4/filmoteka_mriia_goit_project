import { refs } from './refs';
import { setLagnuage, changeLagnuage } from './changeLagnuage';
import { hidenButton, upClick } from './scroll-up';
import { changeColor, setColor } from './color-select';
import { MovieLibrary } from './library-scripts';
import { FireBaseData } from './firebase-auth';
import { Filmoteka } from './fetch-api';
import { Modal } from './modal-film';
import { Loading } from 'notiflix';

window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();
window.modal = new Modal();

window.loader = () => {
  Loading.custom('Loading...', {
    customSvgCode:
    '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  });
}

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
} else {
	refs.headerButtons.classList.remove('start')
	refs.headerButtons.classList.add('watched')
}
// Функція зміни мови
setLagnuage(); 

// Функція зміни кольору
setColor();
// call on init to share window.filmoteka object setLagnuageLibrary

//рендер бібліотеки користувача
window.modal.checkLibrary()