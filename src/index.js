import { refs } from "./scripts/refs";
import { Filmoteka } from './scripts/fetch-api';
import {setLagnuage, changeLagnuage } from "./scripts/changeLagnuage"

import Notiflix from 'notiflix';

console.log(refs.test)

const filmoteka = new Filmoteka()
console.log(filmoteka.query)


refs.searchForm.addEventListener('submit', onClickSearchBtn)

async function onClickSearchBtn(event) {
    event.preventDefault()

    const data = await filmoteka.fetchFilms()
    console.log(data)
}


// Функція зміни мови
setLagnuage(); //для першого відображення тексту, по замовчуванню Eng

const translateCheckboxRef = document.querySelector(".translate");
translateCheckboxRef.addEventListener('click', changeLagnuage);

// console.log(translateCheckboxRef.value, translateCheckboxRef.checked);
// console.log(JSON.parse(localStorage.getItem("Language")).lang);