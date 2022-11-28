const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';
import defaultPicture from '/src/images/test-img-card.jpg';

export function createFilmCardMarkup(data) {
  //   const genreNames = genres.map(el => el.name).join(', ');
  return data
    .map(
      ({
        // id,
        poster_path,
        release_date,
        genre_ids,
        // popularity,
        title,
        vote_average,
      }) =>
        `</li>
      <li class="table-item film-card__item">
        <img src="${
          poster_path ? BASE_IMAGES_URL + poster_path : defaultPicture
        }" alt="${title}" loading="lazy" />
        <div class="film-card__box-info">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__text">
            ${genre_ids} | ${release_date}<span class="film-card__rating">${vote_average}</span>
          </p>
        </div>
      </li> `
    )
    .join('');
}
