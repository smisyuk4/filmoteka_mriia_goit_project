import { refs } from './scripts/refs';
import { Filmoteka } from './scripts/fetch-api';
import { setLagnuage, changeLagnuage } from './scripts/changeLagnuage';

import './scripts/get-tranding';
import './scripts/find-by-name';
import './scripts/find-by-id';
import './scripts/find-trailer';
import './scripts/pagination';
import './scripts/firebase-auth';
import './scripts/input-offer';
import './scripts/modal-film';


import { MovieLibrary } from './scripts/library-scripts';
import { FireBaseData } from './scripts/firebase-auth';
import { hidenButton, upClick } from './scripts/scroll-up';
import { changeColor, initialTheme } from './scripts/color-select';
import Notiflix from 'notiflix';
import { sliderInit } from './scripts/slider';

window.filmoteka = new Filmoteka();
window.fireBase = new FireBaseData();
window.movieLibrary = new MovieLibrary();

document.querySelector('.login-btn').addEventListener('click', e => {
  window.fireBase.login();
});
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
// const colorSelectorRef = document.querySelector(".color--input");
// console.log(colorSelectorRef.value);
initialTheme('light-color');
// window.addEventListener("load",() => { initialTheme('light-color') });
refs.colorSelector.addEventListener('click', changeColor);


sliderInit();
