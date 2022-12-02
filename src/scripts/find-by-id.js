// description: https://developers.themoviedb.org/3/movies/get-movie-details
// exemple: https://api.themoviedb.org/3/movie/{movie_id}?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US


import { refs } from "/src/scripts/refs"
import { Filmoteka } from "./fetch-api"




// onClickToCard()

export async function onClickToCard(event) {
    // event.preventDefault()  

    //get idFilm from content
    const idFilm = 724495; //"The Woman King" 
    const OPTION_FIND = `/movie/${idFilm}`

    const valueObj = {
        option: OPTION_FIND,  
    }
    window.loader()
    try {
        const data = await window.filmoteka.fetchFilms(valueObj)
        console.log(data)
        window.loaderRemove()
    } catch (error) {
        console.log(error)
        window.loaderRemove()
    }
}