// description: https://developers.themoviedb.org/3/trending/get-trending
// example: https://api.themoviedb.org/3/trending/movie/day?api_key=2e329d861e790504d655e6d7175d4c52

import { Filmoteka } from './fetch-api';
import './pagination';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';

let page = 1;
export function initTrending() {

getTranding().then(trandingToday => {
 console.log(trandingToday);

 clearMurkup();
 createFilmCardMarkup(trandingToday.results);
});
}

async function getTranding() {
  const filmoteka = window.filmoteka;
  const OPTION_TRANDING = '/trending/movie/day';
  const valueObj = {
    option: OPTION_TRANDING,
    page,
  };

  try {
    const trandingToday = await filmoteka.fetchFilms(valueObj);
    return trandingToday;
  } catch (error) {
    console.log(error);
  }
}
