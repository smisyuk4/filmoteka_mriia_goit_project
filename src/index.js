import { refs } from "./scripts/refs";
import { Filmoteka } from './scripts/fetch-api'

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