// description: https://developers.themoviedb.org/3/search/search-movies
// example: https://api.themoviedb.org/3/search/movie?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US&page=1&include_adult=false

import { refs } from '/src/scripts/refs';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { makeLangParam } from "./change-language";

refs.searchForm.addEventListener('submit', onClickSearchBtn);

async function onClickSearchBtn(event) {
  event.preventDefault();

  const OPTION_SEARCH = '/search/movie';
  const nameFilm = refs.searchInput.value;
  console.log(nameFilm);

  const valueObj = {
    option: OPTION_SEARCH,
    nameFilm: `&query=${encodeURIComponent(nameFilm.trim())}`,
  };

  if (nameFilm === '') {
    refs.massages.classList.remove('hidden');
    setClearTextContentTimer();
    return;
  }

  makeLangParam(valueObj)
  window.loader()
  try {    
    const data = await window.filmoteka.fetchFilms(valueObj)   

    if (data.results.length === 0) {
      refs.massages.classList.remove('hidden');
      setClearTextContentTimer();
      refs.searchForm.reset();
      window.loaderRemove()
      return;
    }

    console.log(data);
    clearMurkup();
    createFilmCardMarkup(data.results);
    refs.searchForm.reset();
    refs.modalOffer.innerHTML = '';
    window.loaderRemove()
  } catch (error) {
    console.log(error);
    window.loaderRemove()
  }
}

function setClearTextContentTimer() {
  setTimeout(() => {
    refs.massages.classList.add('hidden');
  }, 5000);
}
