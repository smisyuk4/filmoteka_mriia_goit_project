
 async function initItem () {
    const filmoteka = window.filmoteka;    

    //get idFilm from content
    const OPTION_FIND = `/trending/movie/week`

    const valueObj = {
        option: OPTION_FIND,  
    }

        let moviesResult = await filmoteka.fetchFilms(valueObj);
        // let genresResult = await filmoteka.fetchMovieGenres();
    
                let itemsHtml = '';

                moviesResult.results.forEach(movie => {
                    let trendingPoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    if (movie.poster_path === null) {
                        modalPoster = `https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg`
                    }
        
                   itemsHtml += `<li class="slider__item">
                   <img class="slider-film__img" src="${trendingPoster}" alt="poster" loading="lazy"; >
                   <div class="film-card__box-info slider-film__title">
                   </div>
                         </li>`;
        
                });

                return itemsHtml;
}

function mapGenresI(movie, genresList) {
    return movie.genre_ids.map(id => genresList.filter(el => el.id === id)).reduce((strGengre, genre) => 
    {
        return strGengre + genre[0].name + ','}, '');
    
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









