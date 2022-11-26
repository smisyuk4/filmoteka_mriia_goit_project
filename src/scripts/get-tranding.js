// description: https://developers.themoviedb.org/3/trending/get-trending
// example: https://api.themoviedb.org/3/trending/movie/day?api_key=2e329d861e790504d655e6d7175d4c52

import { Filmoteka } from "./fetch-api"
const OPTION_TRANDING = '/trending/movie/day'

// getTranding()
async function getTranding() {
    const filmoteka = new Filmoteka()
    const valueObj = {
        option: OPTION_TRANDING,
    }
    
    try {        
        const trandingToday = await filmoteka.fetchFilms(valueObj)
        console.log(trandingToday)
    } catch (error) {
        console.log(error)
    }
}

