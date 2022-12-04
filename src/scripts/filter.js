import { refs } from "./refs"
import { clearMurkup } from "./markup/clear-murkup";
import { createFilmCardMarkup } from "./markup/create-markup-film";
import { initTrending } from './get-tranding';


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

        refs.dateFilter.innerHTML = yearsList();        
    }

    ratingFilterOnChange(e) {
        const ratingFilter = e.target.value;

        if (ratingFilter === "") {
            localStorage.setItem('filterByRating', "")
            window.filmoteka.filterByRating =''
        } else { 
        window.filmoteka.filterByRating = ratingFilter;
        localStorage.setItem('filterByRating', ratingFilter)
        }
        
        window.filterHendler.updateFilters()
    }

    genreFilterOnChange(e) {
        const genreFilter = e.target.value;    
        
        if (genreFilter === "") {
            localStorage.setItem('filterByGenre', "")
            window.filmoteka.filterByGenre = '';
        } else { 
            window.filmoteka.filterByGenre = genreFilter;
            localStorage.setItem('filterByGenre', genreFilter)
        }
        
        window.filterHendler.updateFilters()
        
    }

    dataFilterOnChange(e) {
        const dateFilter = e.target.value;

        if (dateFilter === "") {
            localStorage.setItem('dataFilter', "")
             window.filmoteka.dataFilter = '';
        } else { 
        window.filmoteka.dataFilter = dateFilter;
        localStorage.setItem('dataFilter', dateFilter)
        }
    window.filterHendler.updateFilters()
    }
    updateFilters(page=1) {
        if (localStorage.getItem('filterByRating') || localStorage.getItem('filterByGenre') || localStorage.getItem('dataFilter')) {
            window.loader()
            filmoteka.fetchFilms({
                region: '',
                page,
                option: '/discover/movie'
            }).then(result => {
                clearMurkup();
                createFilmCardMarkup(result.results);
            })
                .finally(() => window.loaderRemove());
        } else {
            initTrending(page);
        }
        
    }
}
