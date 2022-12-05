import { refs } from './scripts/refs';
import { Filmoteka } from './scripts/fetch-api';
import { setLanguage, changeLanguage } from './scripts/change-language';
import { MovieLibrary } from './scripts/library-scripts';
import { FireBaseData } from './scripts/firebase-auth';
import { hidenButton, upClick } from './scripts/scroll-up';
import { changeColor, setColor } from './scripts/color-select';
import FilterHendler from './scripts/filter';
import { initTrending } from './scripts/get-tranding';
import { sliderInit } from './scripts/slider';
import { Modal } from './scripts/modal-film';
import {spinerStart, spinerStop } from './scripts/loader';
import { News } from "./scripts/fetch-news-api";

import Notiflix from 'notiflix';
import './scripts/get-tranding';
import './scripts/find-by-name';
import './scripts/find-trailer';
import './scripts/pagination';
import './scripts/firebase-auth';
import './scripts/input-offer';
import './scripts/modal-team';


//ініаціплізація глобальних класів
window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();
window.filterHendler = new FilterHendler();
window.modal = new Modal();
window.loader = spinerStart;
window.loaderRemove = spinerStop;
const newsapi = new News;

// login по кнопці
refs.login.addEventListener('click', e => {
  window.fireBase.login();
});

// кнопка повернення вгору документу
window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

// Функція зміни мови
setLanguage(); //для першого відображення тексту, по замовчуванню ua

window.movieLibrary.updateLang();
document.querySelector('.translate').addEventListener('click', () => {
  changeLanguage();
  localStorage.removeItem('newsArr')
  location.reload();
});

// Функція зміни кольору
setColor();
refs.colorSelector.addEventListener('click', changeColor);
// call on init to share window.filmoteka object


//Функції зміни жанру, року або рейтингу
initFilterHendler();
function initFilterHendler() {
  //рейтинг
  let rating = document.querySelector('#rating-filter');
  rating.addEventListener('change', window.filterHendler.ratingFilterOnChange);
  if (localStorage.getItem('filterByRating')) {
    window.filmoteka.filterByRating = localStorage.getItem('filterByRating');
    rating.value = localStorage.getItem('filterByRating');
  }
//жанр
  let genre = document.querySelector('#genre-filter');
  genre.addEventListener('change', window.filterHendler.genreFilterOnChange);
  if (localStorage.getItem('filterByGenre')) {
    window.filmoteka.filterByGenre = localStorage.getItem('filterByGenre');
    genre.value = localStorage.getItem('filterByGenre');
  }
 //рік 
  let date = document.querySelector('#date-filter');
  date.addEventListener('change', window.filterHendler.dataFilterOnChange);
  if (localStorage.getItem('dataFilter')) {
    window.filmoteka.dataFilter = localStorage.getItem('dataFilter');
    date.value = localStorage.getItem('dataFilter');
  }
  window.filterHendler.updateFilters()

}

// Формування слайдеру
sliderInit();
