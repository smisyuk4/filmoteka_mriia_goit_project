import { clearMurkup } from "./markup/clear-murkup";
import { createFilmCardMarkup } from "./markup/create-markup-film";


export default class FilterHendler {
    constructor() {
        let startYear = 1900;
        let endYear = new Date().getFullYear();
        const yearsList = () => {
            let str = `<option value="" selected data-text="yearsFilter">Years</option>`;
            for (let i = endYear; i >= startYear; i -= 1) {
                str += `<option value="${i}">${i}</option>`;
            }
            return str;
        };
        const date = document.querySelector('#date-filter');
        date.innerHTML = yearsList();

    }

    ratingFilterOnChange(e) {
        const ratingFilter = e.target.value;

        if (ratingFilter === "") {
            localStorage.setItem('filterByRating', "")
            return 
        } else { 
        window.filmoteka.filterByRating = ratingFilter;
        localStorage.setItem('filterByRating', ratingFilter)
        }

        filmoteka.fetchFilms({
            region: '',
            page:1,
            option: '/discover/movie'
        }).then(result => {
            clearMurkup();
            createFilmCardMarkup(result.results);
        });
    }

    genreFilterOnChange(e) {
        const genreFilter = e.target.value;    
  
        if (genreFilter === "") {
            localStorage.setItem('filterByGenre', "")
            return 
        } else { 
        window.filmoteka.filterByGenre = genreFilter;
        localStorage.setItem('filterByGenre', genreFilter)
        }

        filmoteka.fetchFilms({
            region: '',
            page:1,
            option: '/discover/movie'
        }).then(result => {
            clearMurkup();
            createFilmCardMarkup(result.results);
           
        });
    }

    dataFilterOnChange(e) {
        const dateFilter = e.target.value;

        if (dateFilter === "") {
            localStorage.setItem('dataFilter', "")
            return 
        } else { 
        window.filmoteka.dataFilter = dateFilter;
        localStorage.setItem('dataFilter', dateFilter)
        }
    
      filmoteka.fetchFilms({
            region: '',
            page:1,
            option: '/discover/movie'
        }).then(result => {
            clearMurkup();
            createFilmCardMarkup(result.results);
        });
    };
}
