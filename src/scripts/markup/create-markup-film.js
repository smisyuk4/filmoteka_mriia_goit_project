import { getGenres } from '../get-generes';
import { refs } from '../refs';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';
const DEFAULT_IMG =
    'https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg';

export async function createFilmCardMarkup(data) {
  const genresArr = await getGenres();

  return data
    .map(
      ({
        id,
        poster_path,
        release_date,
        genre_ids,
        title,
        vote_average,
      }) => {
        const genresList = genresArr
          .filter(e => genre_ids.includes(e.id))
          .map(e => e.name)
          .join(', ');

        let imgLink
        if (!poster_path) {
            imgLink = DEFAULT_IMG
        } else {
            imgLink = `${BASE_IMAGES_URL}${poster_path}`
        } 

        const markup = `</li>
                          <li class="table-item film-card__item" data-id="${id}">
                            <img src="${imgLink}" alt="${title}" loading="lazy" width="350"/>
                            <div class="film-card__box-info">
                              <h3 class="film-card__title">${title}</h3>
                              <p class="film-card__text">
                                ${genresList} | ${release_date.slice(0,4)}<span class="film-card__rating">${
                            Math.round(vote_average * 100) / 100
                          }</span>
                              </p>
                            </div>
                          </li> `;

        refs.container.insertAdjacentHTML('afterbegin', markup);
      }
    )
    .join('');
}
