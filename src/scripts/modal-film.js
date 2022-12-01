import './markup/create-markup-film';
import { refs } from "./refs";
import { icons } from "../images/icons/icons.svg";
const throttle = require('lodash.throttle');
import { Loading } from 'notiflix';
import { onClickToBtnTrailer } from './find-trailer';
import { DEFAULT_IMG } from './markup/create-markup-film'

export class Modal{
    constructor() {
        this.param = {
			option: "",
			lang: '&language=en',
			imageLang: '&include_image_language=en',
			region: '&region=en-US'
		}
        this.filmId=0
        refs.container.addEventListener('click', e => {
            if (e.target.nodeName === "IMG") {
                refs.modalOverlay.classList.remove('visually-hidden');
                const filmId=e.target.parentElement.parentElement.dataset.id
                this.openModal(filmId);
                refs.modalOverlay.dataset.modal = filmId;
            }
        });
        refs.modalOverlay.addEventListener('click', e => {
                    const targetDat=e.target.dataset
                    if (targetDat.close) {
                        refs.modalOverlay.classList.add('visually-hidden');
                        document.body.classList.remove('no-scroll')
                        refs.modalOverlay.dataset.modal = 0;
            }
                    if (targetDat.watched=='add') {
                        window.movieLibrary.addToWatched(targetDat.fid)
                        refs.containerModal.querySelector('.modal-film__watched-button').dataset.watched='remove'
                        refs.containerModal.querySelector('.modal-film__watched-button').innerHTML = "remove from watched"
                    }
                    if (targetDat.queue=="add") {
                        window.movieLibrary.addToQueue(targetDat.fid)
                        refs.containerModal.querySelector('.modal-film__queue-button').dataset.queue='remove'
                        refs.containerModal.querySelector('.modal-film__queue-button').innerHTML = "remove from queue"
                    }
                    if (targetDat.watched=='remove') {
                        window.movieLibrary.removeFromWatched(targetDat.fid)
                        refs.containerModal.querySelector('.modal-film__watched-button').dataset.watched='add'
                        refs.containerModal.querySelector('.modal-film__watched-button').innerHTML = "add to watched"
                    }
                    if (targetDat.queue=='remove') {
                        window.movieLibrary.removeFromQueue(targetDat.fid)
                        refs.containerModal.querySelector('.modal-film__queue-button').dataset.queue='add'
                        refs.containerModal.querySelector('.modal-film__queue-button').innerHTML = "add to queue"
                    }
                });
    }
    closeByEcs(e) {
        if (e.keyCode === 27) {
            window.removeEventListener('keydown', this.escEvent);
            refs.modalOverlay.classList.add('visually-hidden');
            document.body.classList.remove('no-scroll')
        }
    }
    openModal(id) {
        document.body.classList.add('no-scroll')
        this.filmId = id
        Loading.custom('Loading...', {
            customSvgCode:
            '<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        });
        window.addEventListener('keydown', this.closeByEcs);
        if (localStorage.getItem("siteOptions") == "ua") {
			this.param.lang = '&language=uk';
			this.param.imageLang = '&include_image_language=uk';
			this.param.region = '&region=uk-UA';
		} else {
			this.param.lang = '&language=en';
			this.param.imageLang = '&include_image_language=en';
			this.param.region = '&region=en-US';
        }
        this.param.option = `/movie/${id}`;
        window.filmoteka.fetchFilms(this.param)
            .then(res => {
                console.log(res)
                return res
            })
            .then((result) => {
                refs.containerModal.innerHTML = this.markupModalFilm(result);
                Loading.remove(10);
			})
			.catch(error => {
                console.log(error);
            })
        // onClickToBtnTrailer(id).then(url => {
        //         console.log(url);
        //         refs.containerModal.insertAdjacentHTML('beforeend',`<iframe width="866" height="487" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        //     })
        }
    markupModalFilm ({
        poster_path,
        title,
        overview,
        popularity,
        genres,
        vote_average,
        vote_count,
    }) {
        let allGenres = genres.map(el => el.name).join(", ");
        if (allGenres.length === 0) {
            allGenres = "no genres"
        }
        let modalPoster = `https://image.tmdb.org/t/p/w500${poster_path}`
        if (poster_path === null) {
            // modalPoster = `https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg`
            modalPoster = DEFAULT_IMG
        }
        let modalAbout = `${overview}`
        if (modalAbout.length === 0) {
            modalAbout = "Sorry, we don't have a description for this movie"
        }
        return `
            <img src=${modalPoster} alt="${title}" class="modal-film__poster" />
            <div class="modal-film__label">
                <h2 class="modal-film__title">${title}</h2>
                <ul class="modal-film__info">
                    <li class="modal-film__item">
                        <p class="modal-film__item-title" data-text="Vote">Vote / Votes</p>
                        <p class="modal-film__item-text">
                            <span class="vote">${vote_average}</span> / <span class="votes">${vote_count}</span>
                        </p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title" data-text="Popularity">Popularity</p>
                        <p class="modal-film__item-text">${popularity.toFixed(1)}</p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title" data-text="Title">Original Title</p>
                        <p class="modal-film__item-text">${title}</p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title" data-text="Genre">Genre</p>
                        <p class="modal-film__item-text">${allGenres}</p>
                    </li>
                </ul>
                <p class="modal-film__about-title" data-text="About">About</p>
                <p class="modal-film__about-text">${modalAbout}</p>
                <ul class="modal-film__btn-box">
                    <li class="modal-film__btn-item">
                        <button class="modal-film__watched-button modal-film__btn" type="button" ${window.movieLibrary.isWatched(this.filmId)?"data-watched='remove'":"data-watched='add'"} data-fid=${this.filmId}>${window.movieLibrary.isWatched(this.filmId)?"remove from watched":"add to watched"}</button>
                    </li>
                    <li class="modal-film__btn-item">
                    <button class="modal-film__queue-button modal-film__btn" type="button" ${window.movieLibrary.isQueue(this.filmId)?"data-queue='remove'":"data-queue='add'"} data-fid=${this.filmId}>${window.movieLibrary.isQueue(this.filmId)?"remove from queue":"add to queue"}</button>
                    </li>
                </ul>
            </div>
            
        `;
    }
}

