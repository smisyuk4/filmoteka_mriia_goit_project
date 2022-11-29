import { refs } from './refs';
import { setLagnuage, changeLagnuage } from './changeLagnuage';
import { hidenButton, upClick } from './scroll-up';
import { changeColor, initialTheme } from './color-select';

window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

// Функція зміни мови
setLagnuage(); //для першого відображення тексту, по замовчуванню Eng
document.querySelector('.translate').addEventListener('click', changeLagnuage);

// Функція зміни кольору
initialTheme('light-color');
refs.colorSelector.addEventListener('click', changeColor);
// call on init to share window.filmoteka object

