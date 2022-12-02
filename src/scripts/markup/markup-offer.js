import { getGenres } from '../get-generes';

const DEFAULT_IMG =
  'https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg';

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
              loading="lazy" width="70">              
              <div class="input-offer__desc">                        
                  <h3 class="input-offer__title">${title}</h3>
                  <p class="input-offer__genres">${genresList}</p>
                  <p id="release_date">
                  ${release_date}<span class="film-card__rating input-offer__rating">${vote_average}</span>
                  </p>                      
              </div>              
          </li>`;
}

// make link img https://image.tmdb.org/t/p/w500
// https://image.tmdb.org/t/p/w500/l3rIbP71sR7hKtz77E6x7mdz6vG.jpg

//                    one obj from API
//- backdrop_path: "/a2BeIDEOq94NS9b8mYB6fiV2Ijx.jpg"
//+ genre_ids: (2) [16, 10751]
//+ id: 991833
// original_language: "en"
//+ original_title: "Cat Pack: A PAW Patrol Exclusive Event"
// overview: "When Mayor Humdinger transforms his robot cat Meow-Meow into a tiger-sized metal-eating menace, the PAW Patrol calls in the Cat Pack for help in the stopping the creature."
// popularity: 144.819
//+ poster_path: "/l3rIbP71sR7hKtz77E6x7mdz6vG.jpg"
//+ release_date: "2022-06-24"
// title: "Cat Pack: A PAW Patrol Exclusive Event"
// video: false
//+ vote_average: 7.6
// vote_count: 61
