import { getGenres } from '../get-generes';
import { DEFAULT_IMG } from './create-markup-film';

export async function markupOffer(film) {
  const {
    id,
    poster_path,
    genre_ids,
    title,
    release_date,
    vote_average,
  } = film;

  let genresList = '';
  try {
    const genresArr = await getGenres();

    genresList = genresArr
          .filter(film => genre_ids.includes(film.id))
          .map(film => film.name)
          .join(', ');

    let langStorage = localStorage.getItem("siteOptions")

    if (genresList === '' && langStorage === "ua") {
      genresList = 'Потрібно подивитись'
    }

    if (genresList === '' && langStorage === "en") {
      genresList = 'Need watch'
    }
        
  } catch (error) {
    console.log(error);
  }  

  let imgLink;
  if (!poster_path) {
    imgLink = DEFAULT_IMG;
  } else {
    imgLink = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return `<li class="input-offer__item" data-id="${id}">              
              <img class="input-offer__img" src="${imgLink}" alt="${title}"
              loading="lazy" width="70" height="150">              
              <div class="input-offer__desc">                        
                  <h3 class="input-offer__title">${title}</h3>
                  <p class="input-offer__genres">${genresList}</p>
                  <p id="release_date">
                  ${release_date}<span class="film-card__rating input-offer__rating">${vote_average}</span>
                  </p>                      
              </div>              
          </li>`;
}