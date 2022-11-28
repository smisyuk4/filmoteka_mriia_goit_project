const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';
//import defaultPicture from '/src/images/test-img-card.jpg';

export function createFilmCardMarkup(data) {
const serImg = 'https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg'
// <a href='https://postimg.cc/K3YHhBdm' target='_blank'><img src='https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg' border='0' alt='CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3'/></a>
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
          poster_path ? BASE_IMAGES_URL + poster_path : serImg
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
