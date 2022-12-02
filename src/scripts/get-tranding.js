// import { Filmoteka } from './fetch-api';
import './pagination';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { markupNumberPages } from './pagination';
import { doActiveNumberPage } from './pagination';
// import { doArrowPages } from './pagination';
import { refs } from './refs';
import { makeLangParam } from "./changeLagnuage";

export function initTrending(page) {
  getTranding(page)
    .then(trandingToday => {
      clearMurkup();
      createFilmCardMarkup(trandingToday.results);
      return trandingToday;
    })
    .then(trandingToday => {
      markupNumberPages(trandingToday);
      doActiveNumberPage(trandingToday);
      doArrowPages(trandingToday);
    });
}

async function getTranding(page = 1) {
  const OPTION_TRANDING = '/trending/movie/day';
  const valueObj = {
    option: OPTION_TRANDING,
    page,
  };

  makeLangParam(valueObj)
  window.loader()
  try {
    const trandingToday = await window.filmoteka.fetchFilms(valueObj);
    window.loaderRemove()
    return trandingToday;
  } catch (error) {
    console.log(error);
    window.loaderRemove()
  }
  
}

refs.boxNumbersPage.addEventListener('click', selectPage);

function selectPage(event) {
  if (event.target.nodeName === 'LI') {
    initTrending(event.target.textContent);
  }
}

function doArrowPages({ page, total_pages }) {
  refs.boxNumbersPage.firstElementChild.addEventListener('click', () => {
    let numPage = page;
    if (numPage > 1) {
      initTrending(numPage - 1);
    }
  });
  refs.boxNumbersPage.lastElementChild.addEventListener('click', () => {
    let numPage = page;
    let allPages = total_pages;
    if (numPage < allPages) {
      initTrending(numPage + 1);
    }
  });
}
