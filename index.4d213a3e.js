var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("1O3u4"),i=a("6cLkv"),o=a("2mJPI"),s=a("d3vkx"),l=a("8NSUd"),c=a("8ENg6"),d=a("dPnIr");r=a("1O3u4");function u(){r.refs.container.innerHTML=""}var f=a("dSqGA");f=a("dSqGA"),r=a("1O3u4");function m({page:e,total_pages:t},n){r.refs.boxNumbersPage.innerHTML="";let a=[];if(t>9&&e<6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(let e=1;e<=t;e+=1){if(e>8){a.push('<span class="container__numbers-span">...</span>'),a.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);break}a.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`)}a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(t<9){for(let e=1;e<=t&&!(e>9);e+=1)a.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(t>9&&e>=6&&e<t-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<span class="container__numbers-span">...</span>');for(let t=e-2;t<e;t+=1)a.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);a.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);for(let t=e+1;t<e+3;t+=1)a.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);a.push('<span class="container__numbers-span">...</span>'),a.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(t>9&&e>t-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(let e=t;e>=t-8;e-=1)a.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.reverse().join(""))}document.querySelector(`[data-page="${e}"]`).classList.add("is-active-page"),t>9&&(r.refs.boxNumbersPage.firstElementChild.addEventListener("click",(()=>{e>1&&n(e-1)})),r.refs.boxNumbersPage.lastElementChild.addEventListener("click",(()=>{e<t&&n(e+1)})))}r=a("1O3u4"),o=a("2mJPI");function p(e){(async function(e=1){const t={option:"/trending/movie/day",page:e};(0,o.makeLangParam)(t),window.loader();try{const e=await window.filmoteka.fetchFilms(t);return window.loaderRemove(),e}catch(e){console.log(e),window.loaderRemove()}})(e).then((e=>(u(),(0,f.createFilmCardMarkup)(e.results),e))).then((e=>{m(e,p)}))}r.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&p(e.target.textContent)}));var g=a("4NA3t"),w=a("1i23U"),v=a("2shzp");const h=document.querySelector(".marquee-wrapper"),y=document.querySelector(".marquee"),_=h.offsetWidth,b=y.scrollWidth;a("eWCmQ");r=a("1O3u4");a("6cLkv");f=a("dSqGA");a("eWCmQ");o=a("2mJPI");function L(){setTimeout((()=>{r.refs.massages.classList.add("hidden")}),5e3)}r.refs.searchForm.addEventListener("submit",(async function(e){e.preventDefault();const t=r.refs.searchInput.value;console.log(t);const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t.trim())}`};if(""===t)return r.refs.massages.classList.remove("hidden"),void L();(0,o.makeLangParam)(n),window.loader();try{const e=await window.filmoteka.fetchFilms(n);if(0===e.results.length)return r.refs.massages.classList.remove("hidden"),L(),r.refs.searchForm.reset(),void window.loaderRemove();console.log(e),u(),(0,f.createFilmCardMarkup)(e.results),r.refs.searchForm.reset(),r.refs.modalOffer.innerHTML="",window.loaderRemove()}catch(e){console.log(e),window.loaderRemove()}})),a("1O3u4"),a("6cLkv"),a("d6MLv");l=a("8NSUd"),r=a("1O3u4");a("6cLkv");var S=a("8QeDr");async function k(e){const{id:t,poster_path:n,genre_ids:a,title:r,release_date:i,vote_average:o}=e;let s,l="";try{l=(await(0,S.getGenres)()).filter((e=>a.includes(e.id))).map((e=>e.name)).join(", ");let e=localStorage.getItem("siteOptions");""===l&&"ua"===e&&(l="Потрібно подивитись"),""===l&&"en"===e&&(l="Need watch")}catch(e){console.log(e)}return s=n?`https://image.tmdb.org/t/p/w500${n}`:"https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg",`<li class="input-offer__item" data-id="${t}">              \n              <img class="input-offer__img" src="${s}" alt="${r}"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">${r}</h3>\n                  <p class="input-offer__genres">${l}</p>\n                  <p id="release_date">\n                  ${i}<span class="film-card__rating input-offer__rating">${o}</span>\n                  </p>                      \n              </div>              \n          </li>`}o=a("2mJPI");var I={},F=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,O=/^0o[0-7]+$/i,E=parseInt,N="object"==typeof e&&e&&e.Object===Object&&e,B="object"==typeof self&&self&&self.Object===Object&&self,C=N||B||Function("return this")(),M=Object.prototype.toString,q=Math.max,T=Math.min,j=function(){return C.Date.now()};function A(e,t,n){var a,r,i,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=a,i=r;return a=r=void 0,c=t,o=e.apply(i,n)}function p(e){return c=e,s=setTimeout(w,t),d?m(e):o}function g(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=i}function w(){var e=j();if(g(e))return v(e);s=setTimeout(w,function(e){var n=t-(e-l);return u?T(n,i-(e-c)):n}(e))}function v(e){return s=void 0,f&&a?m(e):(a=r=void 0,o)}function h(){var e=j(),n=g(e);if(a=arguments,r=this,l=e,n){if(void 0===s)return p(l);if(u)return s=setTimeout(w,t),m(l)}return void 0===s&&(s=setTimeout(w,t)),o}return t=R(t)||0,H(n)&&(d=!!n.leading,i=(u="maxWait"in n)?q(R(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=r=s=void 0},h.flush=function(){return void 0===s?o:v(j())},h}function H(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function R(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==M.call(e)}(e))return NaN;if(H(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=H(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(F,"");var n=x.test(e);return n||O.test(e)?E(e.slice(2),n?2:8):$.test(e)?NaN:+e}I=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return H(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),A(e,t,{leading:a,maxWait:t,trailing:r})};r.refs.searchInput.addEventListener("input",I((async function(e){const t=e.target.value.trim();if(t.length<3)return r.refs.searchInput.classList.add("not-valid"),void(r.refs.modalOffer.innerHTML="");r.refs.modalOffer.innerHTML="",r.refs.searchInput.classList.remove("not-valid");const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t)}`};try{(0,o.makeLangParam)(n);const e=await window.filmoteka.fetchFilms(n);e.results.sort(((e,t)=>t.vote_average-e.vote_average));let t=3;if(0===e.results.length)return;e.results.length<t&&(t=e.results.length);let a="";for(let n=0;n<t;n+=1)a+=await k(e.results[n]);r.refs.modalOffer.insertAdjacentHTML("beforeend",a)}catch(e){console.log(e)}}),500)),r.refs.searchInput.addEventListener("focusout",(e=>{r.refs.modalOffer.classList.add("visually-hidden")})),r.refs.searchInput.addEventListener("focusin",(e=>{r.refs.modalOffer.classList.remove("visually-hidden")})),r.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){r.refs.modalOffer.innerHTML="",r.refs.searchForm.reset(),r.refs.modalOverlay.classList.remove("visually-hidden");const t=e.target.dataset.id;window.modal.openModal(t),r.refs.modalOverlay.dataset.modal=t}}));const D=document.getElementById("modal-team"),P=document.getElementById("modal-team-Btn"),G=document.getElementsByClassName("close")[0];P.onclick=function(){D.style.display="block"},G.onclick=function(){D.style.display="none"},window.onclick=function(e){e.target==D&&(D.style.display="none")},window.filmoteka=new(0,i.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,s.MovieLibrary),window.filterHendler=new class{ratingFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}genreFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}dataFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}updateFilters(){localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((e=>{u(),(0,f.createFilmCardMarkup)(e.results)})).finally((()=>window.loaderRemove()))):p()}constructor(){let e=(new Date).getFullYear();document.querySelector("#date-filter").innerHTML=(()=>{let t='<option value="" selected data-text="yearsFilter">Years</option>';for(let n=e;n>=1900;n-=1)t+=`<option value="${n}">${n}</option>`;return t})()}},window.modal=new(0,g.Modal),window.loader=w.spinerStart,window.loaderRemove=w.spinerStop;new class{fetchNews(){let e,t=localStorage.getItem("siteOptions");"ua"===t&&(e="ua"),"eng"===t&&(e="us");var n=`https://newsapi.org/v2/top-headlines?sortBy=popularity&country=${e}&from=${new Date}&apiKey=faaeb88fca2547e79a27c6b908f6655f`;return v.default.get(n,{validateStatus:e=>e<500}).then((e=>{429!=e.status&&(this.newsArr=e.data.articles,localStorage.setItem("newsArr",JSON.stringify(this.newsArr)),localStorage.setItem("upDate",(new Date).getDate()),this.updateNews())})).catch((e=>{console.log(e.response.status)}))}updateNews(){let e="";for(;e+=this.newsArr[Math.floor(Math.random()*this.newsArr.length)].title,!(e.length>400);)e+=" • ";y.textContent=e}move(){var e=getComputedStyle(y).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,y.style.transform=-e>=b?"translateX("+_+"px)":"translateX("+e+"px)"}constructor(){this.toDate=(new Date).getDate(),localStorage.getItem("newsArr")?(this.newsArr=JSON.parse(localStorage.getItem("newsArr")),this.upDate=localStorage.getItem("upDate"),this.toDate!=this.upDate?this.fetchNews():this.updateNews()):this.fetchNews();setInterval(this.move,40)}};r.refs.login.addEventListener("click",(e=>{window.fireBase.login()})),window.addEventListener("scroll",c.hidenButton),document.querySelector(".btn-up").addEventListener("click",c.upClick),(0,o.setLagnuage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(()=>{(0,o.changeLagnuage)(),location.reload()})),(0,d.setColor)(),r.refs.colorSelector.addEventListener("click",d.changeColor),function(){let e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));let t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));let n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),async function(){let e=0;const t=document.querySelector(".slider-container"),n=document.querySelector(".slider__track"),a=document.querySelector(".btn-prev"),r=document.querySelector(".btn-next"),i=await async function(){const e={option:"/trending/movie/week"};let t=await window.filmoteka.fetchFilms(e),n="";return t.results.forEach((e=>{let t=`https://image.tmdb.org/t/p/w500${e.poster_path}`;null===e.poster_path&&(modalPoster="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"),n+=`<li class="slider__item">\n                   <img class="slider-film__img" src="${t}" alt="poster" loading="lazy" data-id=${e.id}>\n                   <div class="film-card__box-info slider-film__title">\n                   </div>\n                         </li>`})),n}();document.querySelector(".js-slider-container").innerHTML=i;const o=document.querySelectorAll(".slider__item"),s=o.length,l=t.clientWidth/7,c=1*l;o.forEach((e=>{e.style.minWidth=`${l}px`})),r.addEventListener("click",(()=>{const t=s-(Math.abs(e)+7*l)/l;e-=t>=1?c:t*l,d(),u()})),a.addEventListener("click",(()=>{const t=Math.abs(e)/l;e+=t>=1?c:t*l,d(),u()}));const d=()=>{n.style.transform=`translateX(${e}px)`},u=()=>{a.disabled=0===e,r.disabled=e<=-(s-7)*l};d(),u()}();
//# sourceMappingURL=index.4d213a3e.js.map
