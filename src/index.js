import { refs } from "./scripts/refs";
import { Filmoteka } from './scripts/fetch-api';
import { setLagnuage, changeLagnuage } from "./scripts/changeLagnuage"
import './scripts/get-tranding'
import './scripts/find-by-name'
import './scripts/find-by-id'
import './scripts/find-trailer'
import './scripts/pagination'
import './scripts/firebase-auth'
import { MovieLibrary } from './scripts/library-scripts'
import { FireBaseData } from './scripts/firebase-auth'
import { hidenButton, upClick } from './scripts/scroll-up'
import Notiflix from 'notiflix';

// console.log(refs.test)
window.filmoteka = new Filmoteka()
window.fireBase = new FireBaseData
window.movieLibrary = new MovieLibrary

document.querySelector('.login-btn').addEventListener('click', e => {
    window.fireBase.login();
});
document.querySelector('.film-card').addEventListener('click', e => {
    window.movieLibrary.addToQueue(505)
});

// console.log(filmoteka.query)


window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

refs.searchForm.addEventListener('submit', onClickSearchBtn)
async function onClickSearchBtn(event) {
    event.preventDefault()

    const data = await filmoteka.fetchFilms()
    console.log(data)
}


// Функція зміни мови
setLagnuage(); //для першого відображення тексту, по замовчуванню Eng
document.querySelector(".translate").addEventListener('click', changeLagnuage);
// console.log(translateCheckboxRef.value, translateCheckboxRef.checked);
// console.log(JSON.parse(localStorage.getItem("Language")).lang);

