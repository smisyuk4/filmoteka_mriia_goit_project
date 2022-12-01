import axios from 'axios';

export class Filmoteka {

  constructor() {
    this.searchQuery = 'test query';
    this._filterByRating;
    this._dateFilter;
  }

  async fetchFilms(valueObj) {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '2e329d861e790504d655e6d7175d4c52';
    const {
      option,
      nameFilm = '',
      lang = '&language=en',
      imageLang = '&include_image_language=en',
      region = '&region=en-US',
      page = 1,
    } = valueObj;

    const url = `${BASE_URL}${option}?api_key=${API_KEY}${nameFilm}${lang}${imageLang}${region}&page=${page}&include_adult=false`+ this.addFilterQuery() + this.addDateQuery();
    // console.log(url);

    return await axios.get(url).then(response => {
      return response.data;
    });
  }

  async fetchMovieGenres() {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '2e329d861e790504d655e6d7175d4c52';

    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return await axios.get(url).then(response => {
      return response.data;
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get filterByRating() {
      return this._filterByRating;
  }

  set filterByRating(rating) {
    if (rating >= 1 && rating <= 10) {
      this._filterByRating = rating;
    }

    if (rating === undefined) {
      this._filterByRating = undefined;
    }
  };

  get dataFilter() {
      return this._dateFilter;
  };

  set dataFilter(date) {
    if (date >= 1900) {
      this._dateFilter = date;
    }
    if (date === undefined) {
      this._dateFilter = undefined;
    }
  };

  addDateQuery() {
    if (this.dataFilter) {
      return `&primary_release_year=${this._dateFilter}`
    }
    return '';
  }

  addFilterQuery() {
    if (this.filterByRating) {
      return `&vote_average.gte=${this._filterByRating}`
    }
    return '';
  }
 
}
