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
import { Modal } from './scripts/modal-film';

import Notiflix from 'notiflix';

import './scripts/get-tranding';
import './scripts/find-by-name';
import './scripts/find-by-id';
import './scripts/find-trailer';
import './scripts/pagination';
import './scripts/firebase-auth';
import './scripts/input-offer';
import './scripts/modal-team';
import './scripts/marquee';
import './scripts/loader';

//ініаціплізація глобальних класів
window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();
window.filterHendler = new FilterHendler();
window.modal = new Modal();
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
