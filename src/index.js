import { refs } from "./scripts/refs"
import { Filmoteka } from './scripts/fetch-api'
import './scripts/get-tranding'
import './scripts/find-by-name'
import './scripts/find-by-id'
import './scripts/find-trailer'
import './scripts/pagination'
import { MovieLibrary } from './scripts/library-scripts'
import Notiflix from 'notiflix';

// console.log(refs.test)

const filmoteka = new Filmoteka()


// console.log(filmoteka.query)