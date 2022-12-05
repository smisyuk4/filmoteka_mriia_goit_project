import './markup/create-markup-film';
import { refs } from './refs';
import { Loading } from 'notiflix';
import { DEFAULT_IMG } from './markup/create-markup-film';
import { eng, ua} from "./dictionary"
import { onClickToBtnTrailer } from "./find-trailer"
import { YoutubeVideo } from "./youtube-video"

let sliderRef;

export class Modal {
  constructor() {
    this.video = new YoutubeVideo;
    this.param = {
      option: '',
      lang: '&language=en',
      imageLang: '&include_image_language=en',
      region: '&region=en-US',
      langText: localStorage.getItem("siteOptions") == "eng" ? eng : ua,
    };
    this.filmId = 0;
    this.hash = '';
    this.ids=[]
    refs.container.addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        refs.modalOverlay.classList.remove('visually-hidden');
        refs.containerModal.innerHTML=''
        const filmId = e.target.parentElement.parentElement.dataset.id;
        this.openModal(filmId, 'table');
        refs.modalOverlay.dataset.modal = filmId;
      }
    });
    if (window.location.pathname !== "/filmoteka_mriia_goit_project/partials/library-pg.html" && window.location.pathname !== "/partials/library-pg.html") {
      sliderRef=document.querySelector('.slider__track')
      sliderRef.addEventListener('click', e => {
      if (e.target.nodeName === 'IMG') {
        refs.modalOverlay.classList.remove('visually-hidden');
        refs.containerModal.innerHTML=''
        const filmId = e.target.dataset.id;
        this.openModal(filmId, 'slider');
        refs.modalOverlay.dataset.modal = filmId;
      }
    });
    }
    refs.modalOverlay.addEventListener('click', e => {
        const targetDat = e.target.dataset;
        const targetParent = e.target.parentElement;
      if (targetDat.close) {
        refs.modalOverlay.classList.add('visually-hidden');
        refs.containerModal.innerHTML=''
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
      if (targetDat.back) {
        if (this.ids.length>0) {
          let index = this.ids.indexOf(this.filmId)
          this.openModal(this.ids[index - 1], 'slide')
        }
      }
      if (targetDat.next) {
        if (this.ids.length>0) {
          let index = this.ids.indexOf(this.filmId)
          this.openModal(this.ids[index + 1],'slide')
        }
      }
    });
  }
  closeByEcs(e) {
    if (e.keyCode === 27) {
      window.removeEventListener('keydown', this.escEvent);
      refs.modalOverlay.classList.add('visually-hidden');
      refs.containerModal.innerHTML=''
      document.body.classList.remove('no-scroll');
    }
  }
  openModal(id, slider = '') {
    document.body.classList.add('no-scroll');
    this.filmId = id;
    window.loader();
    if (slider!='slide') {
      window.addEventListener('keydown', this.closeByEcs);
    }
    if (slider == 'slider') {
      if (sliderRef.dataset.ids) {
        this.ids=JSON.parse(sliderRef.dataset.ids)
      } else {
        let ids=[]
        sliderRef.querySelectorAll('[data-id]').forEach(el => ids.push(el.dataset.id))
        sliderRef.dataset.ids = JSON.stringify(ids)
        this.ids=ids
      }
    } else if (slider == 'table') {
      if (refs.container.dataset.ids) {
        this.ids=JSON.parse(refs.container.dataset.ids)
      } else {
        let ids=[]
        refs.container.querySelectorAll('[data-id]').forEach(el => ids.push(el.dataset.id))
        refs.container.dataset.ids = JSON.stringify(ids)
        this.ids=ids
      }
    }
    if (slider=='') {
      refs.modalOverlay.classList.add('single')
      refs.modalOverlay.classList.remove('not-back')
      refs.modalOverlay.classList.remove('not-next')
    } else {
      let index = this.ids.indexOf(this.filmId)
      if (index<0) {
        refs.modalOverlay.classList.add('single')
      } else {
        refs.modalOverlay.classList.remove('single')
      }
      if (index==0) {
        refs.modalOverlay.classList.add('not-back')
      } else {
        refs.modalOverlay.classList.remove('not-back')
      }
      if (index>=(this.ids.length-1)) {
        refs.modalOverlay.classList.add('not-next')
      }else {
        refs.modalOverlay.classList.remove('not-next')
      }
    }
    if (localStorage.getItem('siteOptions') == 'eng') {
      this.param.lang = '&language=en';
      this.param.imageLang = '&include_image_language=en';
      this.param.region = '&region=en-US';
    } else {
      this.param.lang = '&language=uk';
      this.param.imageLang = '&include_image_language=uk';
      this.param.region = '&region=uk-UA';
    }
    this.param.option = `/movie/${id}`;
    window.filmoteka
      .fetchFilms(this.param)
      .then(result => {
        onClickToBtnTrailer(this.filmId)
          .then(hash => {
            this.hash=hash
            refs.containerModal.innerHTML = this.markupModalFilm(result);
            this.video.findVideos()
          })
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => window.loaderRemove());
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
    let video=''
    if (this.hash) {
      video=`<div class="video">
          <a class="video__link" href="https://youtu.be/${this.hash}">
              <picture>
                  <source srcset="https://i.ytimg.com/vi_webp/${this.hash}/maxresdefault.webp" type="image/webp">
                  <img class="video__media" src="https://i.ytimg.com/vi/${this.hash}/maxresdefault.jpg" alt="trailer">
              </picture>
          </a>
          <button class="video__button" aria-label="Запустити видео">
              <svg width="68" height="48" viewBox="0 0 68 48"><path class="video__button-shape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path class="video__button-icon" d="M 45,24 27,14 27,34"></path></svg>
          </button>
      </div>`}
    return `<div class="modal-film__card-container"><img src=${modalPoster} alt="${title}" class="modal-film__poster" />
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
                        <p class="modal-film__item-text">${popularity.toFixed(1)}</p>
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
                        <button class="modal-film__watched-button modal-film__btn" aria-label="${this.param.langText.modalWatchedAdd}" type="button" data-watched="${
                          this.filmId
                        }">${this.param.langText.modalWatchedAdd}</button>
                        <button class="modal-film__watched-buttonr modal-film__btn" aria-label="${this.param.langText.modalWatchedRemove}" type="button" data-watchedr="${
                          this.filmId
                        }">${this.param.langText.modalWatchedRemove}</button>
                    </li>
                    <li class="modal-film__btn-item ${
                      window.movieLibrary.isQueue(this.filmId) ? 'remove' : ''
                    }">
                        <button class="modal-film__queue-button modal-film__btn" aria-label="${this.param.langText.modalQueueAdd}" type="button" data-queue="${
                          this.filmId
                        }">${this.param.langText.modalQueueAdd}</button>
                        <button class="modal-film__queue-buttonr modal-film__btn" aria-label="${this.param.langText.modalQueueRemove}" type="button" data-queuer="${
                          this.filmId
                        }">${this.param.langText.modalQueueRemove}</button>
                    </li>
                </ul>
            </div></div>
          ${video}
        `;
  }
  checkLibrary() {
    if (window.location.pathname == "/filmoteka_mriia_goit_project/partials/library-pg.html" || window.location.pathname == "/partials/library-pg.html") {
      if (window.location.hash == "#queue") {
        refs.container.innerHTML = window.movieLibrary.markupQueue()
      } else {
        refs.container.innerHTML = window.movieLibrary.markupWatched()
      }
      refs.container.dataset.ids = '';
      refs.modalOverlay.classList.add('single')
      this.ids=[]
    }
  }
}
