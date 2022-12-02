import { refs } from './refs';
import { setLagnuage, changeLagnuage } from './changeLagnuage';
import { hidenButton, upClick } from './scroll-up';
import { changeColor, setColor } from './color-select';

window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

// Функція зміни мови
setLagnuage(); 

// Функція зміни кольору
setColor();
// call on init to share window.filmoteka object setLagnuageLibrary

