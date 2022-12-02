import axios from 'axios';

export default class News {

  constructor() {
    // this._filterByRating;
    // this._dateFilter;
  }
  
async fetchNews() {

    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-12-01&' +
    'sortBy=popularity&' +
    'apiKey=de1926e9c94248b9b9aaffe3afcbac80';

var req = new Request(url);

fetch(req)
// .then(function(response) {
//   console.log(response.json());
// })

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

//   get filterByRating() {
//       return this._filterByRating;
//   }

//   set filterByRating(rating) {
//     if (rating >= 1 && rating <= 10) {
//       this._filterByRating = rating;
//     }

//     if (rating === undefined) {
//       this._filterByRating = undefined;
//     }
//   };

  get dataFilter() {
      return this._dateFilter;
  };

//   set dataFilter(date) {
//     if (date >= 1907) {
//       this._dateFilter = date;
//     }
//     if (date === undefined) {
//       this._dateFilter = undefined;
//     }
//   };
}

