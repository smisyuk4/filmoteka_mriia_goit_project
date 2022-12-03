const srollUpRef = document.querySelector('.btn-up');

function hidenButton() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 400 ? srollUpRef.classList.remove('btn-up--hide') : srollUpRef.classList.add('btn-up--hide');
};
function upClick() {
    window.scrollTo(pageYOffset, 0); 
};

export { hidenButton, upClick };