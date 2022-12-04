import { doc } from "firebase/firestore/lite";

export const refs = {
  body: document.querySelector('body'),
  //form search
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search-form__input'),
  searchBtn: document.querySelector('.search-btn'),
  modalOffer: document.querySelector('.input-offer__list'),
  massages: document.querySelector('.search-form__error'),

  // slider
  track: document.querySelector('.slider__track'),
  btnPrev: document.querySelector('.btn-prev'),
  btnNext: document.querySelector('.btn-next'),
  jsSliderContainer: document.querySelector('.js-slider-container'),

  // main
  container: document.querySelector('[data-film-table-list]'),
  headerButtons:document.querySelector('.headerButtons'),
  boxNumbersPage: document.querySelector('.container__numbers-page'),

  modalOverlay: document.querySelector('.modal-film__card-overlay'),
  containerModal: document.querySelector('[data-modal-content]'),

  //color switcher
  colorSelector: document.querySelector('.color--input'),
  
  //translate
  translateCheckboxRef: document.querySelector(".translate"),
  searchFormInputRef: document.querySelector(".search-form__input"),
  elementForTranslate: document.querySelectorAll('[data-text]'),

  //login
  login: document.querySelector('.login-btn'),

  //news feed
  newsWrapper: document.querySelector('.news-wrapper'),
  news: document.querySelector('.news'),

  //filters
  dateFilter: document.querySelector('#date-filter'),

  //btn-up
  btnUp: document.querySelector('.btn-up'),

  //modal team
  modalTeam: document.getElementById("modal-team"),
  modalTeamBtnOpen: document.getElementById("modal-team-Btn"),
  modalTEamBtnClose: document.getElementsByClassName("close")[0], 
};
