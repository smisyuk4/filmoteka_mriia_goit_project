import { makeLangParam } from "./changeLagnuage";

export async function getGenres() {
  const OPTION_TRANDING = '/genre/movie/list';

  const valueObj = {
    option: OPTION_TRANDING,
  };

  makeLangParam(valueObj)

  try {
    const trandingToday = await window.filmoteka.fetchFilms(valueObj);

    return trandingToday.genres;
  } catch (error) {
    console.log(error);
  }
}
