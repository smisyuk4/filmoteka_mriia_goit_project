import { clearMurkup } from "./markup/clear-murkup";
import { createFilmCardMarkup } from "./markup/create-markup-film";

export default class FilterHendler{
    ratingFilterOnChenge(e) {
        const ratingFilter = e.target.value;

        if (ratingFilter === undefined) {
            
            window.filmoteka.filterByRating = ratingFilter;
        } else {
            
        window.filmoteka.filterByRating = +ratingFilter;
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
}