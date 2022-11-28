import { Filmoteka } from "./fetch-api";
import './markup/create-markup-film';
import { onClickToCard } from "./find-by-id";
import { refs } from "./refs";
import { icons } from "../images/icons/icons.svg";

const movie = new Filmoteka();

const modal = document.querySelector('.modal-film__card-overlay');

refs.container.addEventListener('click', event => {
    const filmClick = event.path[2];
    if (!filmClick.classList.contains('film-card__item')) {
        return;
    }
    modal.classList.remove('visually-hidden');
    const idFilm = filmClick.dataset.id;
    openModal(idFilm);
});



export async function openModal(idFilm) {
    const containerModal = document.querySelector('.modal-film__card-content');
    const data = await onClickToCard(idFilm);

    containerModal.innerHTML = await markupModalFilm(data);

    const modalCloseBtn = document.querySelector('.modal-film__close-btn');
    

    // Close modal by cross button
    modalCloseBtn.addEventListener('click', closeByCross);
    function closeByCross() {
        modalCloseBtn.removeEventListener('click', closeByCross);
        modal.classList.add('visually-hidden');
    }

    // Close modal by overlay
    modal.addEventListener('click', closeByOverlay);
    function closeByOverlay(e) {
        if (e.target === modal) {
            modal.removeEventListener('click', closeByOverlay);
            modal.classList.add('visually-hidden');
        }
    }

    // Close modal by Esc button
    window.addEventListener('keydown', closeByEcs);
    function closeByEcs(e) {
        if (e.keyCode === 27) {
            window.removeEventListener('keydown', closeByEcs);
            modal.classList.add('visually-hidden');
        }
    }

    // Render modal
    const closeIcon = `${icons}#icon-close`;
    function markupModalFilm ({
        poster_path,
        original_title,
        overview,
        popularity,
        genres,
        vote_average,
        vote_count,
    }) {
        const allGenres = genres.flatMap(genre => genre.name).slise(0, 3);

        allGenres.slise(0,3)
        let newGenreModal = allGenres.join(', ')
        if (newGenreModal.length === 0) {
            newGenreModal = "no genres"
        }
        let modalPoster = `https://image.tmdb.org/t/p/w500${poster_path}`
        if (poster_path === null) {
            modalPoster = `https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg`
        }
        let modalAbout = `${overview}`
        console.log(modalAbout);
        if (modalAbout.length === 0) {
            modalAbout = "Sorry, we don't have a description for this movie"
        }
        return `
            <button type="button" class="modal-film__close-btn" data-modal-close>
                <svg width="12" height="12" class="modal-film__close-icon">
                    <use href="${closeIcon}"></use>
                </svg>
            </button>
            <img src=${modalPoster} alt="${original_title}" class="modal-film__poster" />
            <div class="modal-film__label">
                <h2 class="modal-film__title">${original_title}</h2>
                <div class="modal-film__info-block">
                    <ul class="modal-film__info descr-modal">
                        <li class="descr-modal__item">
                            <h4 class="descr-modal__title" data-text="Vote">Vote / Votes</h4>
                            <p class="descr-modal__text">
                                ${vote_average}<span>/</span>${vote_count}
                            </p>
                        </li>
                        <li class="descr-modal__item">
                            <h4 class="descr-modal__title" data-text="Popularity">Popularity</h4>
                            <p class="descr-modal__text">${popularity.toFixed(1)}</p>
                        </li>
                        <li class="descr-modal__item">
                            <h4 class="descr-modal__title" data-text="Title">Original Title</h4>
                            <p class="descr-modal__text">${original_title}</p>
                        </li>
                        <li class="descr-modal__item">
                            <h4 class="descr-modal__title" data-text="Genre">Genre</h4>
                            <p class="descr-modal__text">${newGenreModal}</p>
                        </li>
                    </ul>
                </div>
                <div clas="modal-film__about-block">
                    <h4 class="modal-film__about-title" data-text="About">About</h4>
                    <p class="modal-film__about-text">${modalAbout}</p>
                </div>
            </div>
        `;
    }
}

