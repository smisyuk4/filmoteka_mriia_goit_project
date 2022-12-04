import { refs } from "/src/scripts/refs"
import { markupOffer } from "./markup/markup-offer"
import { makeLangParam } from "./change-language";
const throttle = require('lodash.throttle');

const TIME_DELAY = 1000

refs.searchInput.addEventListener('input', throttle(onChangeInput, TIME_DELAY))
refs.searchInput.addEventListener('focusout', e => {
    setTimeout(() => {
        refs.modalOffer.classList.add('visually-hidden')
    }, 150);
})
refs.searchInput.addEventListener('focusin', e => {
    refs.modalOffer.classList.remove('visually-hidden')
})
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

    const valueObj = {
        option: OPTION_SEARCH,
        nameFilm: `&query=${encodeURIComponent(inputValue)}`,
    }

    try {
        makeLangParam(valueObj)
        const data = await window.filmoteka.fetchFilms(valueObj)
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
    if (e.target.nodeName === "IMG" || e.target.nodeName === "LI") {
        refs.modalOffer.innerHTML = ''
        refs.searchForm.reset();
        refs.modalOverlay.classList.remove('visually-hidden');
        const filmId=e.target.dataset.id

        window.modal.openModal(filmId);
        refs.modalOverlay.dataset.modal = filmId;
    }
}