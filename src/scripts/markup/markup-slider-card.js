import { DEFAULT_IMG, BASE_IMAGES_URL } from './create-markup-film'

export function markupSlider(movie) {
    const {poster_path, title, id} = movie

    let imgLink;
    if (!poster_path) {
        imgLink = DEFAULT_IMG;
    } else {
        imgLink = `${BASE_IMAGES_URL}${poster_path}`;
    }

    return `<li class="slider__item">
                <img class="slider-film__img" src="${imgLink}" alt="${title}" loading="lazy"  height="500" data-id=${id}>                
            </li>`
}