import { refs } from './scripts/refs';
import { Filmoteka } from './scripts/fetch-api';
import { setLagnuage, changeLagnuage } from './scripts/changeLagnuage';
import { MovieLibrary } from './scripts/library-scripts';
import { FireBaseData } from './scripts/firebase-auth';
import { hidenButton, upClick } from './scripts/scroll-up';
import { changeColor, setColor } from './scripts/color-select';
import FilterHendler from './scripts/filter';
import { initTrending } from './scripts/get-tranding';
import { sliderInit } from './scripts/slider';

import Notiflix from 'notiflix';
import { Loading } from 'notiflix';
import './scripts/get-tranding';
import './scripts/find-by-name';
import './scripts/find-by-id';
import './scripts/find-trailer';
import './scripts/pagination';
import './scripts/firebase-auth';
import './scripts/input-offer';
import { Modal } from './scripts/modal-film';
import './scripts/modal-team';
import './scripts/loader';


//ініаціплізація глобальних класів
window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();
window.filterHendler = new FilterHendler();
window.modal = new Modal();
window.loader = () => {
  Loading.custom('Loading...', {
    customSvgCode:
    '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  });
}
// login по кнопці
refs.login.addEventListener('click', e => {
  window.fireBase.login();
});

// setInterval(() => {
//   console.clear()
// }, 10);

//Запуск модалки з деталями фільму з "барабану"
if (document.querySelector('.slider__track')) {
  document.querySelector('.slider__track').addEventListener('click', e => {
    
  });
}

// document.querySelector('.film-card').addEventListener('click', e => {
//     window.movieLibrary.addToQueue(505)
// });

window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

// Функція зміни мови
setLagnuage(); //для першого відображення тексту, по замовчуванню Eng
document.querySelector('.translate').addEventListener('click', () => {
  changeLagnuage();
  window.movieLibrary.updateLang();
});

// Функція зміни кольору
setColor();
refs.colorSelector.addEventListener('click', changeColor);
// call on init to share window.filmoteka object
initTrending();

function initFilterHendler() {
  let rating = document.querySelector('#rating-filter');
  rating.addEventListener('change', window.filterHendler.ratingFilterOnChenge);

  let date = document.querySelector('#date-filter');
  date.addEventListener('change', window.filterHendler.dataFilterOnChange);
}
initFilterHendler();

sliderInit();
