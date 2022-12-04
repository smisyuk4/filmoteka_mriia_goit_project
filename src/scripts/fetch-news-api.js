import axios from 'axios';
import { refs } from "./refs"

const wrapperWidth = refs.newsWrapper.offsetWidth;
const newsWidth = refs.news.scrollWidth;

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
  }

  fetchNews() {
    let lang = "uk";
    try {
      let langStorage = localStorage.getItem('siteOptions');      

      if (langStorage === 'ua') {
        lang = 'uk';
      }

      if (langStorage === 'eng') {
        lang = 'en';
      }
    } catch (error) {
      console.log(error)
    }   
    
    let options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: 'Ukraine', lang: lang, sort_by: 'relevancy', page: '1'},
      headers: {
        'x-api-key': 'mof9O_f3PWnZRIRc-SXKZz806th-jcFoXeoDXgqGKpU'
      }
    };

    axios.request(options)
      .then((response)=>{
        this.newsArr = response.data.articles
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
          refs.news.textContent = subresult;
  }

  move() {
    var currentTX = getComputedStyle(refs.news).transform.split(',');
    if (currentTX[4] === undefined) {
      currentTX = -1;
    } else {
      currentTX = parseFloat(currentTX[4]) - 1;
    }

    if (-currentTX >= newsWidth) {
      refs.news.style.transform = 'translateX(' + wrapperWidth + 'px)';
    } else {
      refs.news.style.transform = 'translateX(' + currentTX + 'px)';
    }
  }
}
