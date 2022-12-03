import { refs } from "./refs"
import { markupSlider } from "./markup/markup-slider-card"


async function initItem () { 
    const OPTION_FIND = `/trending/movie/week`

    const valueObj = {
        option: OPTION_FIND,  
    }

    const moviesResult = await window.filmoteka.fetchFilms(valueObj);    
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

    const container = document.querySelector('.slider-container'); //не переноситься у refs
    const itemsHtml = await initItem();
    
    refs.jsSliderContainer.innerHTML = itemsHtml;
    const items = document.querySelectorAll('.slider__item'); //не переноситься у refs
    
    const itemsCount = items.length;
    const itemsWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemsWidth;  

    items.forEach((item) => {
        item.style.minWidth = `${itemsWidth}px`
    });

    window.addEventListener('resize',()=> {
        const itemsWidth = container.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemsWidth;  

        items.forEach((item) => {
            item.style.minWidth = `${itemsWidth}px`
        });
    })

    refs.btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

        setPosition();
        checkBtns();
    });


    refs.btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemsWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        refs.track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        refs.btnPrev.disabled = position === 0;
        refs.btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemsWidth;
    };

    setPosition();
    checkBtns();
}









