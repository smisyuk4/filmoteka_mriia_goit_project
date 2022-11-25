import axios from "axios";

export class Filmoteka {
    constructor() {
        this.searchQuery = 'test query';
    }

    async fetchFilms() {
        const BASE_URL = 'https://api.themoviedb.org/3'
        const API_KEY = '2e329d861e790504d655e6d7175d4c52'
        const query = '76341'
        const lang = 'ru-Ru'
        // const FILTERS = '&image_type=photo&orientation=horizontal&safesearch=true'
        // const PAGINATION = `&per_page=${40}&page=${numberPage}`
        const url = `${BASE_URL}/movie/${query}?api_key=${API_KEY}&language=${lang}&include_image_language=en,null` //&language=${lang}
        //&q=${encodeURIComponent(name)}${FILTERS}${PAGINATION}
            // const url = 'https://api.themoviedb.org/3/movie/550?api_key=2e329d861e790504d655e6d7175d4c52'
            return await axios.get(url)
                .then(response => { 
                    return response.data;
                })
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}