import { markupSlider } from './markup/markup-slider-card'

async function initItem () { 
    const OPTION_FIND = `/trending/movie/week`

    const valueObj = {
        option: OPTION_FIND,  
    }

    moviesResult = await window.filmoteka.fetchFilms(valueObj);    
    let itemsHtml = '';

    moviesResult.results.forEach(movie => {
        itemsHtml += markupSlider(movie)
    });

    return itemsHtml;
}

export async function sliderInit () {
    let position = 0;
    const slidesToShow = 7;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider__track');
    // const item = document.querySelector('.slider-item');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const itemsHtml = await initItem();
    const jsSliderContainer = document.querySelector('.js-slider-container');
    jsSliderContainer.innerHTML = itemsHtml;
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    const itemsWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemsWidth;  

    items.forEach((item) => {
        item.style.minWidth = `${itemsWidth}px`
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

        setPosition();
        checkBtns();
    });


    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemsWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemsWidth;
    };

    setPosition();
    checkBtns();
}









