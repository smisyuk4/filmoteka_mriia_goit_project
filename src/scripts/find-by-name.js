// description: https://developers.themoviedb.org/3/search/search-movies
// example: https://api.themoviedb.org/3/search/movie?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US&page=1&include_adult=false

import { refs } from '/src/scripts/refs';
import { Filmoteka } from './fetch-api';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
refs.searchForm.addEventListener('submit', onClickSearchBtn);

async function onClickSearchBtn(event) {
  event.preventDefault();
  const OPTION_SEARCH = '/search/movie';
  const filmoteka = new Filmoteka();

  const nameFilm = refs.searchInput.value;
  console.log(nameFilm);

  const valueObj = {
    option: OPTION_SEARCH,
    nameFilm: `&query=${encodeURIComponent(nameFilm)}`,
  };

  //--------------------------
  if (!nameFilm.trim()) {
    refs.masseges.style.color = '#ff001b';
    refs.masseges.textContent = 'Please, type something.';

    setClearTextContentTimer();
    return;
  }

  //------------------------

  try {
    const data = await filmoteka.fetchFilms(valueObj);
    // const data = await filmoteka.fetchFilms({ option: /movie/`${id}` });
    //------------------------

    if (!data.results.length) {
      clearMurkup();
      refs.masseges.style.color = '#ff001b';
      refs.masseges.textContent =
        'Sorry, there are no films matching your search query. Please, try again.';
      setClearTextContentTimer();
      refs.searchForm.reset();
      return;
    }
    //---------------------
    // const results = data.results;
    console.log(data);
    clearMurkup();
    createFilmCardMarkup(data.results);
    refs.searchForm.reset();
    refs.modalOffer.innerHTML = '';
  } catch (error) {
    console.log(error);
  }
}

// function appendFilmCardsMarkup(results) {
//   return refs.container.insertAdjacentHTML(
//     'beforeend',
//     createFilmCardMarkup(results)
//   );
// }

//===============================

function setClearTextContentTimer() {
  setTimeout(() => {
    refs.masseges.textContent = '';
  }, 3000);
}
