import { refs } from "/src/scripts/refs"
import { Filmoteka } from "./fetch-api"

const throttle = require('lodash.throttle');
const TIME_DELAY = 500

refs.searchInput.addEventListener('input', throttle(onChangeInput, TIME_DELAY))

async function onChangeInput(event) {    
    const inputValue = event.target.value
    console.log(inputValue)

    if (inputValue.length < 3) {
        console.log('not-valid')
        refs.searchInput.classList.add('not-valid')
        return
    }
    refs.searchInput.classList.remove('not-valid')

    const OPTION_SEARCH = '/search/movie'
    const filmoteka = new Filmoteka()

    const valueObj = {
        option: OPTION_SEARCH,
        nameFilm: `&query=${encodeURIComponent(inputValue)}`,
    }

    try {
        const data = await filmoteka.fetchFilms(valueObj)
        console.log(data.results)

        let countOfferCards = 5

        if (data.results.length === 0) {
            return
        }

        if (data.results.length < countOfferCards) {
            countOfferCards = data.results.length
        } 

        let markup = ''
        for (let i = 0; i < countOfferCards; i += 1){
            markup += markupOffer(data.results[i])
        }

        refs.modalOffer.insertAdjacentHTML('beforeend', markup)

    } catch (error) {
        console.log(error)
    }
}

function markupOffer(film) {
    const { id, poster_path, genre_ids, original_title, release_date, title, vote_average } = film
    // <p id="title">title: ${title}</p>
    //надо сделать пустышку для картинки

    let imgLink
    if (!poster_path) {
        imgLink = '#'
    } else {
        imgLink = `https://image.tmdb.org/t/p/w500${poster_path}`
    }


    

    return  `<li class="input-offer__item" data-id="${id}">
                <a class="input-offer__link" href="#">
                    <img class="input-offer__img" src="${imgLink}" alt=""
                        width="70">
                    <div class="input-offer__desc">
                        
                        <p id="original_title">original title: ${original_title}</p>
                        <p id="genre">genre: ${genre_ids}</p>
                        <p id="release_date">release date: ${release_date}</p>
                        <p id="vote_average">vote average: ${vote_average}</p>
                    </div>
                </a>
            </li>`
}

// make link img https://image.tmdb.org/t/p/w500
// https://image.tmdb.org/t/p/w500/l3rIbP71sR7hKtz77E6x7mdz6vG.jpg

//  one obj from API
//- backdrop_path: "/a2BeIDEOq94NS9b8mYB6fiV2Ijx.jpg"
//+ genre_ids: (2) [16, 10751]
//+ id: 991833
// original_language: "en"
//+ original_title: "Cat Pack: A PAW Patrol Exclusive Event"
//+ overview: "When Mayor Humdinger transforms his robot cat Meow-Meow into a tiger-sized metal-eating menace, the PAW Patrol calls in the Cat Pack for help in the stopping the creature."
// popularity: 144.819
//+ poster_path: "/l3rIbP71sR7hKtz77E6x7mdz6vG.jpg"
//+ release_date: "2022-06-24"
//+ title: "Cat Pack: A PAW Patrol Exclusive Event"
// video: false
//+ vote_average: 7.6
// vote_count: 61