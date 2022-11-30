// import Glide from '@glidejs/glide';
// import filmsCardSliderTpl from '../templates/films-slider.hbs';
// import trailer from './trailers.js';
// const sliderContainer = document.querySelector('.js-slider-container');
// renderTrendy();

// import { async } from "@firebase/util";
// import { assign } from "lodash";

// const glide = new Glide('.glide', {
//   type: 'slider',
//   startAt: 0,
//   perView: 8,
//   autoplay: 2000,
//   hoverpause: true,
//   bound: true,
// });

// glide.mount();

// function renderTrendy() {
//   const url = `https://api.themoviedb.org/32e329d861e790504d655e6d7175d4c52`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(({ results }) => {
//       return results;
//     })
//     .then(renderSliderFilms)
//     .catch(err => {
//       sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
//     });
// }

// function renderSliderFilms(articles) {
//   sliderContainer.innerHTML = filmsCardSliderTpl(articles);
//   trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
// }


// =============
// ===============
 async function initItem () {
    const filmoteka = window.filmoteka;    

    //get idFilm from content
    const OPTION_FIND = `/trending/movie/week`

    const valueObj = {
        option: OPTION_FIND,  
    }

        let moviesResult = await filmoteka.fetchFilms(valueObj);
        let genresResult = await filmoteka.fetchMovieGenres();
    
                let ietmsHtml = '';

                moviesResult.results.forEach(movie => {
                    let trendingPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    if (movie.poster_path === null) {
                        modalPoster = `https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg`
                    }
        
                   ietmsHtml += `<li class="slider__item">
                   <img src="${trendingPoster}" alt="poster" >
                   <div class="film-card__box-info">
                     <h3 class="film-card__title">${movie.original_title}</h3>
                     <p class="film-card__text">${mapGenresI(movie, genresResult.genres)} | ${movie.release_date}<span class="film-card__rating">${movie.vote_average.toFixed(1)}</span></p>
                   </div>
                         </li>`;
        
                });

                return ietmsHtml;
}

function mapGenresI(movie, genresList) {
    return movie.genre_ids.map(id => genresList.filter(el => el.id === id)).reduce((strGengre, genre) => 
    {
        return strGengre + genre[0].name + ','}, '');
    
}

export async function sliderInit () {

    let position = 0;
const slidesToShow = 6;
const slidesToScroll = 3;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider__track');
// const item = document.querySelector('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsHtml = await initItem();
const jsSliderContainer = document.querySelector('.js-slider-container');
jsSliderContainer.innerHTML = itemsHtml;
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const itemsWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemsWidth;  

items.forEach((item) => {
    item.style.minWidth = `${itemsWidth}px`
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

    setPosition();
    checkBtns();
});


btnPrev.addEventListener('click', () => {
    console.log(btnNext);
    const itemsLeft = Math.abs(position) / itemsWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemsWidth;
};

setPosition();
checkBtns();

}









