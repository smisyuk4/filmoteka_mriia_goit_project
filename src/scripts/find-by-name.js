// description: https://developers.themoviedb.org/3/search/search-movies
// example: https://api.themoviedb.org/3/search/movie?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US&page=1&include_adult=false

import { refs } from '/src/scripts/refs';
import { Filmoteka } from './fetch-api';

const container = document.querySelector('.table-list');
refs.searchForm.addEventListener('submit', onClickSearchBtn);

async function onClickSearchBtn(event) {
  event.preventDefault();
  const OPTION_SEARCH = '/search/movie';
  const filmoteka = new Filmoteka();

  //get nameFilm from input
  const nameFilm = refs.searchInput.value;
  console.log(nameFilm);

  const valueObj = {
    option: OPTION_SEARCH,
    nameFilm: `&query=${encodeURIComponent(nameFilm)}`,
  };

  try {
    const data = await filmoteka.fetchFilms(valueObj);
    console.log(data.results);
    // const results = data.results;
    // console.log(markup);
    clearMurkup();
    appendFilmCardsMarkup(data.results);
    refs.searchForm.reset;
    // container.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

function createFilmCardMarkup(data) {
  return data
    .map(
      ({
        // id,
        poster_path,
        release_date,
        genres,
        // popularity,
        title,
        vote_average,
      }) =>
        `</li>
      <li class="table-item film-card__item">
        <img src="${
          poster_path ? BASE_IMAGES_URL + poster_path : defaultPicture
        }" alt="poster" />
        <div class="film-card__box-info">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__text">
            ${genres} | ${release_date}<span class="film-card__rating">${vote_average}</span>
          </p>
        </div>
      </li> `
    )
    .join('');
}

function appendFilmCardsMarkup(results) {
  return container.insertAdjacentHTML(
    'beforeend',
    createFilmCardMarkup(results)
  );
}

function clearMurkup() {
  container.innerHTML = '';
}
