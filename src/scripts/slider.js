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

function getSlidesToShow(container) {
    if (container.clientWidth <= 900 ){
        return 4;
    } else  if (container.clientWidth < 1092 ){
        return 5;
    } else  if (container.clientWidth >= 1092 ){
        return 6;
    }
}

export async function sliderInit () {
    let position = 0;
    let slidesToShow = 6;
    const slidesToScroll = 1;
    

    const container = document.querySelector('.slider-container'); //не переноситься у refs
    const itemsHtml = await initItem();
    
    refs.jsSliderContainer.innerHTML = itemsHtml;
    const items = document.querySelectorAll('.slider__item'); //не переноситься у refs
    const itemsCount = items.length;
    // устонавливаю количество айтемов в зависимости от ширени екрана 
    slidesToShow = getSlidesToShow(container);
    const itemsWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemsWidth;  

    items.forEach((item) => {
        item.style.minWidth = `${itemsWidth}px`
    });

    // количество имейдж на ширину екрана
    // =====================================

    window.addEventListener('resize',()=> {
        slidesToShow = getSlidesToShow(container);
        const itemsWidth = container.clientWidth / slidesToShow; 

        items.forEach((item) => {
            item.style.minWidth = `${itemsWidth}px`
        });
        
        // повернутися на початок списку
        // ================================

        position = 0;
         
        setPosition();
        checkBtns();
    })

    refs.btnNext.addEventListener('click', () => {
        const realItemWidth = items[0].clientWidth;
        console.log(realItemWidth);
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









