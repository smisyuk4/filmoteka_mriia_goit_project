import { refs } from './refs'

function hidenButton() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 400 ? refs.btnUp.classList.remove('btn-up--hide') : refs.btnUp.classList.add('btn-up--hide');
};

function upClick() {
    window.scrollTo(scrollY, 0); 
};

export { hidenButton, upClick };