// description: https://developers.themoviedb.org/3/search/search-movies
// example: https://api.themoviedb.org/3/search/movie?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US&page=1&include_adult=false

import { refs } from '/src/scripts/refs';
import { Filmoteka } from './fetch-api';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { Loading } from 'notiflix';

refs.searchForm.addEventListener('submit', onClickSearchBtn);

async function onClickSearchBtn(event) {
  event.preventDefault();
  Loading.custom('Loading...', {
    customSvgCode:
      '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  });
  const OPTION_SEARCH = '/search/movie';
  const filmoteka = new Filmoteka();
  const nameFilm = refs.searchInput.value;
  console.log(nameFilm);

  const valueObj = {
    option: OPTION_SEARCH,
    nameFilm: `&query=${encodeURIComponent(nameFilm.trim())}`,
  };

  if (nameFilm === '') {
    Loading.remove(2000);
    // refs.massages.textContent = 'Please, type something.';
    refs.massages.classList.remove('hidden');
    setClearTextContentTimer();
    return;
  }

  try {
    Loading.remove(2000);
    const data = await filmoteka.fetchFilms(valueObj);

    if (data.results.length === 0) {
      refs.massages.classList.remove('hidden');
      setClearTextContentTimer();
      refs.searchForm.reset();

      return;
    }

    console.log(data);
    clearMurkup();
    createFilmCardMarkup(data.results);
    refs.searchForm.reset();
    refs.modalOffer.innerHTML = '';
  } catch (error) {
    console.log(error);
  }
}

function setClearTextContentTimer() {
  setTimeout(() => {
    refs.massages.classList.add('hidden');
  }, 5000);
}
