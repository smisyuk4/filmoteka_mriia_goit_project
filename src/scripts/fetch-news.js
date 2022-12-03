import axios from 'axios';
const wrapper = document.querySelector('.marquee-wrapper');
const marquee = document.querySelector('.marquee');
const wrapperWidth = wrapper.offsetWidth;
const marqueeWidth = marquee.scrollWidth;
export class News {
  constructor() {
    this.toDate=new Date().getDate()
    if (localStorage.getItem('newsArr')) {
      this.newsArr = JSON.parse(localStorage.getItem('newsArr'))
      this.upDate = localStorage.getItem('upDate')
      if (this.toDate!=this.upDate) {
        this.fetchNews()
      } else {
        this.updateNews()
      }
    } else {
      this.fetchNews()
    }
    let interval = setInterval(this.move, 40);
    ;
  }

  fetchNews() {
    let langStorage = localStorage.getItem('siteOptions');
    let country;
    if (langStorage === 'ua') {
      country = 'ua';
    }

    if (langStorage === 'eng') {
      country = 'us';
    }
    var url = `https://newsapi.org/v2/top-headlines?sortBy=popularity&country=${country}&from=${new Date()}&apiKey=faaeb88fca2547e79a27c6b908f6655f`; //+

    return axios
      .get(url, {
        validateStatus: status => {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then(response => {
        if (response.status != 429) {
          this.newsArr = response.data.articles
          localStorage.setItem('newsArr', JSON.stringify(this.newsArr))
          localStorage.setItem('upDate', new Date().getDate())
          this.updateNews()
        }
      })
      .catch(error => {
        console.log(error.response.status);
      });
  }
  updateNews() {
    let state = true;
          let subresult = '';
          let i = 0;
          while (state) {
            subresult += this.newsArr[Math.floor(Math.random()*this.newsArr.length)].title;
            if (subresult.length > 400) {
              break;
            }
            subresult += ' • ';
            i++;
          }
          marquee.textContent = subresult;
  }
  move() {
    var currentTX = getComputedStyle(marquee).transform.split(',');
    if (currentTX[4] === undefined) {
      currentTX = -1;
    } else {
      currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= marqueeWidth) {
      marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
    } else {
      marquee.style.transform = 'translateX(' + currentTX + 'px)';
    }
  }
}
