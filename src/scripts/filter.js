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

    ratingFilterOnChenge(e) {
        const ratingFilter = e.target.value;

        if (ratingFilter === undefined) {
            
            window.filmoteka.filterByRating = ratingFilter;
        } else { 
        window.filmoteka.filterByRating = +ratingFilter;
        }
        window.loader()
        filmoteka.fetchFilms({
            region: '',
            page:1,
            option: '/discover/movie'
        }).then(result => {
            clearMurkup();
            createFilmCardMarkup(result.results);
        })
        .finally(()=>window.loaderRemove());
    }

    dataFilterOnChange(e) {
        const dateFilter = e.target.value;

        if (dateFilter=== undefined) {
            window.filmoteka.dataFilter = dateFilter;
        } else {
            window.filmoteka.dataFilter = dateFilter;
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
