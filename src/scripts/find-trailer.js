// description: https://developers.themoviedb.org/3/movies/get-movie-videos
// example: https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=2e329d861e790504d655e6d7175d4c52&language=en-US
//Vimeo был добавлен в качестве источника видео.
// https://www.npmjs.com/package/vimeo
// npm i vimeo
// const Vimeo = require('vimeo').Vimeo;
// const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

// https://www.themoviedb.org/talk/5847e0a4c3a3681414007586


// we can take key youtube in response and make link for watch trailer
const keyTrailer = '0Mu74OixF8k' //THE WOMAN KING Vignette - Train Like a Warrior
const linkYoutube = `https://www.youtube.com/watch?v=${keyTrailer}`


import { refs } from "/src/scripts/refs"
import { Filmoteka } from "./fetch-api"




onClickToBtnTrailer()

async function onClickToBtnTrailer(event) {
    // event.preventDefault()
    const filmoteka = new Filmoteka()    

    //get idFilm from content
    const idFilm = 724495; //"The Woman King" 
    const OPTION_FIND = `/movie/${idFilm}/videos`

    const valueObj = {
        option: OPTION_FIND,  
    }

    try {
        const data = await filmoteka.fetchFilms(valueObj)
        console.log(data)
        console.log(data.results[15])
        console.log(data.results[15].key)
        console.log(linkYoutube)
    } catch (error) {
        console.log(error)
    }
}