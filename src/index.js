import { refs } from "./scripts/refs"
import { Filmoteka } from './scripts/fetch-api'
import './scripts/get-tranding'
import './scripts/find-by-name'
import './scripts/find-by-id'
import './scripts/find-trailer'
import './scripts/pagination'
import {hidenButton, upClick} from './scripts/scroll-up'

import Notiflix from 'notiflix';

// console.log(refs.test)

const filmoteka = new Filmoteka()
// console.log(filmoteka.query)


window.addEventListener('scroll', hidenButton);
document.querySelector('.btn-up').addEventListener('click', upClick);

