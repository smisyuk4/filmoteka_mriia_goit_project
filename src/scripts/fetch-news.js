import axios from 'axios';
  const wrapper = document.querySelector('.marquee-wrapper')
  const marquee = document.querySelector('.marquee')
  const  wrapperWidth = wrapper.offsetWidth
  const marqueeWidth = marquee.scrollWidth;
export class News {

  constructor() {
    this.wrapper = document.querySelector('.marquee-wrapper')
    this.marquee = document.querySelector('.marquee')
    this.wrapperWidth = this.wrapper.offsetWidth
    this.marqueeWidth = this.marquee.scrollWidth;
    let interval = setInterval(this.move, 40);
    this.fetchNews()
  }
  
fetchNews() {
    let langStorage = localStorage.getItem("siteOptions")
    let country
        if (langStorage === "ua") {
            country='ua'
        }

        if (langStorage === "eng") {
            country='us'
        }
    var url = `https://newsapi.org/v2/top-headlines?sortBy=popularity&country=${country}&from=${new Date}&apiKey=de1926e9c94248b9b9aaffe3afcbac80` //+
    // 'q=Ukraine&' +
    // `from=${new Date}&` +
    // 'sortBy=popularity&' +
    // 'apiKey=de1926e9c94248b9b9aaffe3afcbac80';

//var req = new Request(url);

//fetch(req)
// .then(function(response) {
//   console.log(response.json());
// })

  return axios.get(url).then(response => {
    let state = true
    let subresult = ''
    let i=0
    while (state) {
      subresult += response.data.articles[i].title
      if (subresult.length>400) {
        break
      }
      subresult +=' • '
      i++
    }
    this.marquee.textContent=subresult
  }); 
  }
  move() {

  var currentTX = getComputedStyle(marquee).transform.split(',');
  if( currentTX[4] === undefined ) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  
  if(-currentTX >= marqueeWidth) {
    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
  } else {
    marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
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

