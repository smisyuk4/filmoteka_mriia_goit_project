import { refs } from "./scripts/refs";
import { Filmoteka } from './scripts/fetch-api'

import Notiflix from 'notiflix';

console.log(refs.test)

const filmoteka = new Filmoteka()
console.log(filmoteka.query)