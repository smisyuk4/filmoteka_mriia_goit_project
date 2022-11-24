import { refs } from './refs'
import { Filmoteka } from './fetch-api'

import Notiflix from 'notiflix';

console.log(refs.testLibrary)

const filmoteka = new Filmoteka()

console.log(filmoteka.query)
filmoteka.searchQuery = 'new searchQuery'
console.log(filmoteka.query)

refs.libP.innerHTML = 'header library TEST'