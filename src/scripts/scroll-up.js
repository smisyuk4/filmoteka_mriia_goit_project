const srollUpRef = document.querySelector('.btn-up');

function hidenButton() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 400 ? srollUpRef.classList.remove('btn-up_hide') : srollUpRef.classList.add('btn-up_hide');
};
function upClick() {
     window.scrollTo(pageYOffset, 0); 
};

export { hidenButton, upClick };