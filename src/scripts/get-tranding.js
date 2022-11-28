// description: https://developers.themoviedb.org/3/trending/get-trending
// example: https://api.themoviedb.org/3/trending/movie/day?api_key=2e329d861e790504d655e6d7175d4c52

import { Filmoteka } from './fetch-api';
import './pagination';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { refs } from './refs';

let page = 1;

// getTranding();
getTranding().then(trandingToday => {
  console.log(trandingToday);

  clearMurkup();
  const markup = createFilmCardMarkup(trandingToday.results);
  refs.container.insertAdjacentHTML('afterbegin', markup);
});

async function getTranding() {
  const filmoteka = new Filmoteka();
  const OPTION_TRANDING = '/trending/movie/day';
  const valueObj = {
    option: OPTION_TRANDING,
    page,
  };

  try {
    const trandingToday = await filmoteka.fetchFilms(valueObj);
    // console.log(trandingToday);
    return trandingToday;
  } catch (error) {
    console.log(error);
  }
}
