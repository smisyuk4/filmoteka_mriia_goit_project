import { refs } from "/src/scripts/refs"


export function onClickToBtnTrailer(id) {
    // event.preventDefault()
    return window.filmoteka.fetchFilms({option:`/movie/${id}/videos`})
        .then(res => {
            return `https://www.youtube.com/embed/${res.results[0].key}`;
        })
        .catch(error => {
            console.log(error);
        })
}