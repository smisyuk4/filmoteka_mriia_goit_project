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
    //let url = `https://api.newscatcherapi.com/v2/search?q=Ukraine&`
    let url = `https://gnews.io/api/v4/top-headlines?q=Ukraine&from=${new Date}&token=1BYQ_xWnCGdOZO5vADf9kDQuB5bTYYz8y-IZQnUBnbw&lang=${lang}&max=40`;
    
    let options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: 'Ukraine', lang: lang, sort_by: 'relevancy', page: '1'},
      headers: {
        'x-api-key': '1BYQ_xWnCGdOZO5vADf9kDQuB5bTYYz8y-IZQnUBnbw'
      }
    };

    axios.request(options)
      .then((response)=>{
        this.newsArr = response.data.articles
        console.log(this.newsArr)
      
        localStorage.setItem('newsArr', JSON.stringify(this.newsArr))
        localStorage.setItem('upDate', new Date().getDate())
        this.updateNews()
      }).catch((error)=>{
        console.error(error);
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
