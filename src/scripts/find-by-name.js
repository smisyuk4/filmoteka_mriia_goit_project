// description: https://developers.themoviedb.org/3/search/search-movies
// example: https://api.themoviedb.org/3/search/movie?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US&page=1&include_adult=false

import { refs } from '/src/scripts/refs';
import { Filmoteka } from './fetch-api';
import { createFilmCardMarkup } from '/src/scripts/markup/сrearte-markup-film';
import { clearMurkup } from './markup/clear-murkup';
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
    // const data = await filmoteka.fetchFilms({ option: /movie/`${id}` });

    // const results = data.results;
    console.log(data);
    // clearMurkup();
     appendFilmCardsMarkup(data.results);
    refs.searchForm.reset;
  } catch (error) {
    console.log(error);
  }
}

function appendFilmCardsMarkup(results) {
  return refs.container.insertAdjacentHTML(
    'beforeend',
    createFilmCardMarkup(results)
  );
}

//===============================
