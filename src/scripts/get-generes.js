import { Filmoteka } from './fetch-api';
import { makeLangParam } from "./changeLagnuage";

export async function getGenres() {
  const filmoteka = new Filmoteka();
  const OPTION_TRANDING = '/genre/movie/list';

  const valueObj = {
    option: OPTION_TRANDING,
  };

  makeLangParam(valueObj)

  try {
    const trandingToday = await filmoteka.fetchFilms(valueObj);

    return trandingToday.genres;
  } catch (error) {
    console.log(error);
  }
}
