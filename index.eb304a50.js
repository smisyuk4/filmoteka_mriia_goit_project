!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var i=a("7Sf3J"),o=a("8x2sk"),s=a("bz3TN"),c=a("8kBMg"),l=a("gyWj4"),u=a("aHxE2"),d=a("9Isww"),f=a("8MBJY"),p=a("a2hTj");i=a("7Sf3J");function m(){i.refs.container.innerHTML=""}var g=a("5vsmo"),v=a("bpxeT"),w=a("2TvXO");g=a("5vsmo"),i=a("7Sf3J");function h(e,t){var n=e.page,r=e.total_pages;i.refs.boxNumbersPage.innerHTML="";var a=[];if(r>9&&n<6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var o=1;o<=r;o+=1){if(o>8){a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="'.concat(r,'">').concat(r,"</li>"));break}a.push('<li class="container__numbers-item" data-page="'.concat(o,'">').concat(o,"</li>"))}a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(r<9){for(var s=1;s<=r&&!(s>9);s+=1)a.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"));i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(r>9&&n>=6&&n<r-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<span class="container__numbers-span">...</span>');for(var c=n-2;c<n;c+=1)a.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));a.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>"));for(var l=n+1;l<n+3;l+=1)a.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="'.concat(r,'">').concat(r,"</li>")),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(r>9&&n>r-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var u=r;u>=r-8;u-=1)a.push('<li class="container__numbers-item" data-page="'.concat(u,'">').concat(u,"</li>"));a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.reverse().join(""))}document.querySelector('[data-page="'.concat(n,'"]')).classList.add("is-active-page"),r>9&&(i.refs.boxNumbersPage.firstElementChild.addEventListener("click",(function(){n>1&&t(n-1)})),i.refs.boxNumbersPage.lastElementChild.addEventListener("click",(function(){n<r&&t(n+1)})))}i=a("7Sf3J"),s=a("bz3TN");function b(e){(function(){return y.apply(this,arguments)})(e).then((function(e){return m(),(0,g.createFilmCardMarkup)(e.results),e})).then((function(e){h(e,b)}))}function y(){return y=e(v)(e(w).mark((function t(){var n,r,a,i=arguments;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r={option:"/trending/movie/day",page:n},(0,s.makeLangParam)(r),window.loader(),e.prev=5,e.next=8,window.filmoteka.fetchFilms(r);case 8:return a=e.sent,window.loaderRemove(),e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),window.loaderRemove();case 17:case"end":return e.stop()}}),t,null,[[5,13]])}))),y.apply(this,arguments)}i.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&b(e.target.textContent)}));var _=function(){"use strict";function t(){e(f)(this,t);var n=(new Date).getFullYear();document.querySelector("#date-filter").innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',t=n;t>=1900;t-=1)e+='<option value="'.concat(t,'">').concat(t,"</option>");return e}()}return e(p)(t,[{key:"ratingFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}},{key:"genreFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}},{key:"dataFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}},{key:"updateFilters",value:function(){localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){m(),(0,g.createFilmCardMarkup)(e.results)})).finally((function(){return window.loaderRemove()}))):b()}}]),t}();v=a("bpxeT"),w=a("2TvXO");function x(){return k.apply(this,arguments)}function k(){return(k=e(v)(e(w).mark((function t(){var n,r,a;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",n={option:"/trending/movie/week"},e.next=4,window.filmoteka.fetchFilms(n);case 4:return r=e.sent,a="",r.results.forEach((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path);null===e.poster_path&&(modalPoster="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"),a+='<li class="slider__item">\n                   <img class="slider-film__img" src="'.concat(t,'" alt="poster" loading="lazy" data-id=').concat(e.id,'>\n                   <div class="film-card__box-info slider-film__title">\n                   </div>\n                         </li>')})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=e(v)(e(w).mark((function t(){var n,r,a,i,o,s,c,l,u,d,f,p,m,g;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=7,a=1,i=document.querySelector(".slider-container"),o=document.querySelector(".slider__track"),s=document.querySelector(".btn-prev"),c=document.querySelector(".btn-next"),e.next=9,x();case 9:l=e.sent,document.querySelector(".js-slider-container").innerHTML=l,u=document.querySelectorAll(".slider__item"),d=u.length,f=i.clientWidth/r,p=a*f,u.forEach((function(e){e.style.minWidth="".concat(f,"px")})),c.addEventListener("click",(function(){var e=d-(Math.abs(n)+r*f)/f;n-=e>=a?p:e*f,m(),g()})),s.addEventListener("click",(function(){var e=Math.abs(n)/f;n+=e>=a?p:e*f,m(),g()})),g=function(){s.disabled=0===n,c.disabled=n<=-(d-r)*f},(m=function(){o.style.transform="translateX(".concat(n,"px)")})(),g();case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var L=a("bUH0J"),F=a("j0SV0"),I=(f=a("8MBJY"),p=a("a2hTj"),a("dIxxU")),T=document.querySelector(".marquee-wrapper"),O=document.querySelector(".marquee"),B=T.offsetWidth,N=O.scrollWidth,E=function(){"use strict";function t(){e(f)(this,t),this.toDate=(new Date).getDate(),localStorage.getItem("newsArr")?(this.newsArr=JSON.parse(localStorage.getItem("newsArr")),this.upDate=localStorage.getItem("upDate"),this.toDate!=this.upDate?this.fetchNews():this.updateNews()):this.fetchNews();setInterval(this.move,40)}return e(p)(t,[{key:"fetchNews",value:function(){var e,t=this,n=localStorage.getItem("siteOptions");"ua"===n&&(e="ua"),"eng"===n&&(e="us");var r="https://newsapi.org/v2/top-headlines?sortBy=popularity&country=".concat(e,"&from=").concat(new Date,"&apiKey=faaeb88fca2547e79a27c6b908f6655f");return I.default.get(r,{validateStatus:function(e){return e<500}}).then((function(e){429!=e.status&&(t.newsArr=e.data.articles,localStorage.setItem("newsArr",JSON.stringify(t.newsArr)),localStorage.setItem("upDate",(new Date).getDate()),t.updateNews())})).catch((function(e){console.log(e.response.status)}))}},{key:"updateNews",value:function(){for(var e="";!((e+=this.newsArr[Math.floor(Math.random()*this.newsArr.length)].title).length>400);)e+=" • ";O.textContent=e}},{key:"move",value:function(){var e=getComputedStyle(O).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,O.style.transform=-e>=N?"translateX("+B+"px)":"translateX("+e+"px)"}}]),t}();a("iU1Pc");v=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J");a("8x2sk");g=a("5vsmo");a("iU1Pc");s=a("bz3TN");function M(){return(M=e(v)(e(w).mark((function t(n){var r,a,o;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"/search/movie",r=i.refs.searchInput.value,console.log(r),a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r.trim()))},""!==r){e.next=9;break}return i.refs.massages.classList.remove("hidden"),j(),e.abrupt("return");case 9:return(0,s.makeLangParam)(a),window.loader(),e.prev=11,e.next=14,window.filmoteka.fetchFilms(a);case 14:if(0!==(o=e.sent).results.length){e.next=21;break}return i.refs.massages.classList.remove("hidden"),j(),i.refs.searchForm.reset(),window.loaderRemove(),e.abrupt("return");case 21:console.log(o),m(),(0,g.createFilmCardMarkup)(o.results),i.refs.searchForm.reset(),i.refs.modalOffer.innerHTML="",window.loaderRemove(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(11),console.log(e.t0),window.loaderRemove();case 33:case"end":return e.stop()}}),t,null,[[11,29]])})))).apply(this,arguments)}function j(){setTimeout((function(){i.refs.massages.classList.add("hidden")}),5e3)}i.refs.searchForm.addEventListener("submit",(function(e){return M.apply(this,arguments)}));v=a("bpxeT"),w=a("2TvXO");a("7Sf3J"),a("8x2sk"),a("44sU7");l=a("gyWj4"),v=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J");a("8x2sk");v=a("bpxeT"),w=a("2TvXO");var C=a("dGF2p"),H="https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg";function q(e){return R.apply(this,arguments)}function R(){return(R=e(v)(e(w).mark((function t(n){var r,a,i,o,s,c,l,u,d,f;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a=n.poster_path,i=n.genre_ids,o=n.title,s=n.release_date,c=n.vote_average,l="",e.prev=2,e.next=5,(0,C.getGenres)();case 5:u=e.sent,l=u.filter((function(e){return i.includes(e.id)})).map((function(e){return e.name})).join(", "),d=localStorage.getItem("siteOptions"),""===l&&"ua"===d&&(l="Потрібно подивитись"),""===l&&"en"===d&&(l="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return f=a?"https://image.tmdb.org/t/p/w500".concat(a):H,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(r,'">              \n              <img class="input-offer__img" src="').concat(f,'" alt="').concat(o,'"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(l,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(c,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}s=a("bz3TN");var D={},A=a("l5bVx"),P="Expected a function",G=/^\s+|\s+$/g,J=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,W=/^0o[0-7]+$/i,X=parseInt,z="object"==typeof t&&t&&t.Object===Object&&t,Y="object"==typeof self&&self&&self.Object===Object&&self,$=z||Y||Function("return this")(),K=Object.prototype.toString,V=Math.max,Q=Math.min,Z=function(){return $.Date.now()};function ee(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(P);function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function m(e){return l=e,s=setTimeout(v,t),u?p(e):o}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function v(){var e=Z();if(g(e))return w(e);s=setTimeout(v,function(e){var n=t-(e-c);return d?Q(n,i-(e-l)):n}(e))}function w(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function h(){var e=Z(),n=g(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(v,t),p(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=ne(t)||0,te(n)&&(u=!!n.leading,i=(d="maxWait"in n)?V(ne(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},h.flush=function(){return void 0===s?o:w(Z())},h}function te(t){var n=void 0===t?"undefined":e(A)(t);return!!t&&("object"==n||"function"==n)}function ne(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(A)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==K.call(t)}(t))return NaN;if(te(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=te(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(G,"");var r=U.test(t);return r||W.test(t)?X(t.slice(2),r?2:8):J.test(t)?NaN:+t}D=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(P);return te(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),ee(e,t,{leading:r,maxWait:t,trailing:a})};function re(){return(re=e(v)(e(w).mark((function t(n){var r,a,o,c,l,u;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=n.target.value.trim()).length<3)){e.next=5;break}return i.refs.searchInput.classList.add("not-valid"),i.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return i.refs.modalOffer.innerHTML="",i.refs.searchInput.classList.remove("not-valid"),"/search/movie",a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r))},e.prev=9,(0,s.makeLangParam)(a),e.next=13,window.filmoteka.fetchFilms(a);case 13:if((o=e.sent).results.sort((function(e,t){return t.vote_average-e.vote_average})),c=3,0!==o.results.length){e.next=18;break}return e.abrupt("return");case 18:o.results.length<c&&(c=o.results.length),l="",u=0;case 21:if(!(u<c)){e.next=29;break}return e.t0=l,e.next=25,q(o.results[u]);case 25:l=e.t0+=e.sent;case 26:u+=1,e.next=21;break;case 29:i.refs.modalOffer.insertAdjacentHTML("beforeend",l),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(9),console.log(e.t1);case 35:case"end":return e.stop()}}),t,null,[[9,32]])})))).apply(this,arguments)}i.refs.searchInput.addEventListener("input",D((function(e){return re.apply(this,arguments)}),500)),i.refs.searchInput.addEventListener("focusout",(function(e){i.refs.modalOffer.classList.add("visually-hidden")})),i.refs.searchInput.addEventListener("focusin",(function(e){i.refs.modalOffer.classList.remove("visually-hidden")})),i.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){i.refs.modalOffer.innerHTML="",i.refs.searchForm.reset(),i.refs.modalOverlay.classList.remove("visually-hidden");var t=e.target.dataset.id;window.modal.openModal(t),i.refs.modalOverlay.dataset.modal=t}}));var ae=document.getElementById("modal-team"),ie=document.getElementById("modal-team-Btn"),oe=document.getElementsByClassName("close")[0];ie.onclick=function(){ae.style.display="block"},oe.onclick=function(){ae.style.display="none"},window.onclick=function(e){e.target==ae&&(ae.style.display="none")},window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,c.MovieLibrary),window.filterHendler=new _,window.modal=new(0,L.Modal),window.loader=F.spinerStart,window.loaderRemove=F.spinerStop;new E;i.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),window.addEventListener("scroll",u.hidenButton),document.querySelector(".btn-up").addEventListener("click",u.upClick),(0,s.setLagnuage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLagnuage)(),location.reload()})),(0,d.setColor)(),i.refs.colorSelector.addEventListener("click",d.changeColor),function(){var e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));var t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));var n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),function(){S.apply(this,arguments)}()}();
//# sourceMappingURL=index.eb304a50.js.map
