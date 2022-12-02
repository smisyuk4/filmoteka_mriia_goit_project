import './markup/create-markup-film';
import { refs } from './refs';
import { Loading } from 'notiflix';
import { DEFAULT_IMG } from './markup/create-markup-film';
import { eng, ua} from "./dictionary"

export class Modal {
  constructor() {
    this.param = {
      option: '',
      lang: '&language=en',
      imageLang: '&include_image_language=en',
      region: '&region=en-US',
      langText: eng
    };
    this.filmId = 0;
    refs.container.addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        refs.modalOverlay.classList.remove('visually-hidden');
        const filmId = e.target.parentElement.parentElement.dataset.id;
        this.openModal(filmId);
        refs.modalOverlay.dataset.modal = filmId;
      }
    });
    if (window.location.pathname !== "/filmoteka_mriia_goit_project/partials/library-pg.html" && window.location.pathname !== "/partials/library-pg.html") {
      document.querySelector('.slider__track').addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        refs.modalOverlay.classList.remove('visually-hidden');
        const filmId = e.target.dataset.id;
        this.openModal(filmId);
        refs.modalOverlay.dataset.modal = filmId;
      }
    });
    }
    refs.modalOverlay.addEventListener('click', e => {
        const targetDat = e.target.dataset;
        const targetParent = e.target.parentElement;
      if (targetDat.close) {
        refs.modalOverlay.classList.add('visually-hidden');
        document.body.classList.remove('no-scroll');
        refs.modalOverlay.dataset.modal = 0;
      }
      if (targetDat.watched) {
        window.movieLibrary.addToWatched(targetDat.watched);
        targetParent.classList.toggle('remove');
      }
      if (targetDat.queue) {
        window.movieLibrary.addToQueue(targetDat.queue);
        targetParent.classList.toggle('remove');
      }
      if (targetDat.watchedr) {
        window.movieLibrary.removeFromWatched(targetDat.watchedr);
        targetParent.classList.toggle('remove');
      }
      if (targetDat.queuer) {
        window.movieLibrary.removeFromQueue(targetDat.queuer);
        targetParent.classList.toggle('remove');
      }
    });
  }
  closeByEcs(e) {
    if (e.keyCode === 27) {
      window.removeEventListener('keydown', this.escEvent);
      refs.modalOverlay.classList.add('visually-hidden');
      document.body.classList.remove('no-scroll');
    }
  }
  openModal(id) {
    document.body.classList.add('no-scroll');
    this.filmId = id;
    window.loader();
    window.addEventListener('keydown', this.closeByEcs);
    if (localStorage.getItem('siteOptions') == 'ua') {
      this.param.lang = '&language=uk';
      this.param.imageLang = '&include_image_language=uk';
      this.param.region = '&region=uk-UA';
      this.param.langText = ua;
    } else {
      this.param.lang = '&language=en';
      this.param.imageLang = '&include_image_language=en';
      this.param.region = '&region=en-US';
      this.param.langText = eng;
    }
    this.param.option = `/movie/${id}`;
    window.filmoteka
      .fetchFilms(this.param)
      .then(result => {
        refs.containerModal.innerHTML = this.markupModalFilm(result);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(()=>window.loaderRemove());
    // onClickToBtnTrailer(id).then(url => {
    //         console.log(url);
    //         refs.containerModal.insertAdjacentHTML('beforeend',`<iframe width="866" height="487" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    //     })
  }
  markupModalFilm({
    poster_path,
    title,
    overview,
    popularity,
    genres,
    vote_average,
    vote_count,
  }) {
    let allGenres = genres.map(el => el.name).join(', ');
    if (allGenres.length === 0) {
      allGenres = 'no genres';
    }
    let modalPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    if (poster_path === null) {
      // modalPoster = `https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg`
      modalPoster = DEFAULT_IMG;
    }
    let modalAbout = `${overview}`;
    if (modalAbout.length === 0) {
      modalAbout = `${ this.param.langText.modalAboutNoTranslate }`;
    }
    return `<img src=${modalPoster} alt="${title}" class="modal-film__poster" />
            <div class="modal-film__label">
                <h2 class="modal-film__title">${title}</h2>
                <ul class="modal-film__info">
                    <li class="modal-film__item">
                        <p class="modal-film__item-title" >${this.param.langText.vote}</p>
                        <p class="modal-film__item-text">
                            <span class="vote">${vote_average}</span> / <span class="votes">${vote_count}</span>
                        </p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title">${this.param.langText.popularity}</p>
                        <p class="modal-film__item-text">${popularity.toFixed(
                          1
                        )}</p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title">${this.param.langText.title}</p>
                        <p class="modal-film__item-text">${title}</p>
                    </li>
                    <li class="modal-film__item">
                        <p class="modal-film__item-title">${this.param.langText.genre}</p>
                        <p class="modal-film__item-text">${allGenres}</p>
                    </li>
                </ul>
                <p class="modal-film__about-title">${this.param.langText.about}</p>
                <p class="modal-film__about-text">${modalAbout}</p>
                <ul class="modal-film__btn-box">
                    <li class="modal-film__btn-item ${
                      window.movieLibrary.isWatched(this.filmId) ? 'remove' : ''
                    }">
                        <button class="modal-film__watched-button modal-film__btn" type="button" data-watched="${
                          this.filmId
                        }">${this.param.langText.modalWatchedAdd}</button>
                        <button class="modal-film__watched-buttonr modal-film__btn" type="button" data-watchedr="${
                          this.filmId
                        }">${this.param.langText.modalWatchedRemove}</button>
                    </li>
                    <li class="modal-film__btn-item ${
                      window.movieLibrary.isQueue(this.filmId) ? 'remove' : ''
                    }">
                        <button class="modal-film__queue-button modal-film__btn" type="button" data-queue="${
                          this.filmId
                        }">${this.param.langText.modalQueueAdd}</button>
                        <button class="modal-film__queue-buttonr modal-film__btn" type="button" data-queuer="${
                          this.filmId
                        }">${this.param.langText.modalQueueRemove}</button>
                    </li>
                </ul>
            </div>
            
        `;
  }
  checkLibrary() {
    if (window.location.pathname == "/filmoteka_mriia_goit_project/partials/library-pg.html" || window.location.pathname == "/partials/library-pg.html") {
      if (window.location.hash == "#queue") {
        refs.container.innerHTML=window.movieLibrary.markupQueue()
      } else {
        refs.container.innerHTML=window.movieLibrary.markupWatched()
      }
    }
  }
}
