import axios from 'axios';
const wrapper = document.querySelector('.marquee-wrapper');
const marquee = document.querySelector('.marquee');
const wrapperWidth = wrapper.offsetWidth;
const marqueeWidth = marquee.scrollWidth;
export class News {
  constructor() {
    this.toDate=new Date().getDate()
    if (localStorage.getItem('newsArr') && localStorage.getItem('newsArr')!=undefined) {
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
    let lang="uk";
    if (langStorage === 'ua') {
      lang = 'uk';
    }

    if (langStorage === 'eng') {
      lang = 'en';
    }
    //var url = `https://newsapi.org/v2/top-headlines?sortBy=popularity&country=${country}&from=${new Date()}&apiKey=`; //+
    let url = `https://gnews.io/api/v4/top-headlines?q=Ukraine&from=${new Date}&token=ca196b177f363bede0e6950d088df3ac&lang=${lang}&max=40`;
    return axios
      .get(url, {
        validateStatus: status => {
          return status < 500; // Resolve only if the status code is less than 500
        },
      })
      .then(function (response) {
        console.log(response)
        return response.data;

      })
      .then(response => {
        this.newsArr = response.articles
          console.log(this.newsArr)
        
          localStorage.setItem('newsArr', JSON.stringify(this.newsArr))
          localStorage.setItem('upDate', new Date().getDate())
          this.updateNews()
      })
      .catch(error => {
        console.log(error);
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
