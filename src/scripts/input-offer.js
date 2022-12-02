import { refs } from "/src/scripts/refs"
import { Filmoteka } from "./fetch-api"
import { markupOffer } from "./markup/markup-offer"
import { makeLangParam } from "./changeLagnuage";


const throttle = require('lodash.throttle');
const TIME_DELAY = 500

refs.searchInput.addEventListener('input', throttle(onChangeInput, TIME_DELAY))
refs.modalOffer.addEventListener('click', onClickCardOffer)

async function onChangeInput(event) {    
    const inputValue = event.target.value.trim()

    if (inputValue.length < 3) {
        refs.searchInput.classList.add('not-valid')
        refs.modalOffer.innerHTML = ''
        return
    }
    refs.modalOffer.innerHTML = ''
    refs.searchInput.classList.remove('not-valid')

    const OPTION_SEARCH = '/search/movie'
    const filmoteka = new Filmoteka()

    const valueObj = {
        option: OPTION_SEARCH,
        nameFilm: `&query=${encodeURIComponent(inputValue)}`,
    }

    try {
        makeLangParam(valueObj)
        const data = await filmoteka.fetchFilms(valueObj)
        data.results.sort((a, z) => z.vote_average - a.vote_average)

        let countOfferCards = 3
        if (data.results.length === 0) {
            return
        }

        if (data.results.length < countOfferCards) {
            countOfferCards = data.results.length
        } 

        let markup = ''
        for (let i = 0; i < countOfferCards; i += 1){
            markup += await markupOffer(data.results[i])
        }

        refs.modalOffer.insertAdjacentHTML('beforeend', markup)
    } catch (error) {
        console.log(error)
    }
}

function onClickCardOffer(e) {
    console.log(e.target.nodeName)
    console.log(e.currentTarget.nodeName)
    if (e.target.nodeName === "IMG" || e.target.nodeName === "LI") {
        refs.modalOffer.innerHTML = ''
        refs.searchForm.reset();
            console.log(e.target.dataset.id)
        refs.modalOverlay.classList.remove('visually-hidden');
        const filmId=e.target.dataset.id


        window.modal.openModal(filmId);
        refs.modalOverlay.dataset.modal = filmId;
    }
}