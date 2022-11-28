import { Filmoteka } from './fetch-api';

export async function getGenres() {
  const filmoteka = new Filmoteka();
  const OPTION_TRANDING = '/genre/movie/list';
  const valueObj = {
    option: OPTION_TRANDING,
  };

  try {
    const trandingToday = await filmoteka.fetchFilms(valueObj);
    // console.log(trandingToday.genres);
    return trandingToday.genres;
  } catch (error) {
    console.log(error);
  }
}
