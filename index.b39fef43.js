var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a=r("1O3u4"),i=r("6cLkv"),o=r("2mJPI"),s=r("d3vkx"),l=r("8NSUd"),c=r("8ENg6"),d=r("dPnIr");a=r("1O3u4"),a=r("1O3u4");function f(){a.refs.container.innerHTML="",a.refs.container.dataset.ids=""}var u=r("dSqGA");u=r("dSqGA"),a=r("1O3u4");function m({page:e,total_pages:t},n){a.refs.boxNumbersPage.innerHTML="";let r=[];if(t>9&&e<6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(let e=1;e<=t;e+=1){if(e>8){r.push('<span class="container__numbers-span">...</span>'),r.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);break}r.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`)}r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(t<9){for(let e=1;e<=t&&!(e>9);e+=1)r.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(t>9&&e>=6&&e<t-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<span class="container__numbers-span">...</span>');for(let t=e-2;t<e;t+=1)r.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);r.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);for(let t=e+1;t<e+3;t+=1)r.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);r.push('<span class="container__numbers-span">...</span>'),r.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(t>9&&e>t-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(let e=t;e>=t-8;e-=1)r.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.reverse().join(""))}document.querySelector(`[data-page="${e}"]`).classList.add("is-active-page"),t>9&&(a.refs.boxNumbersPage.firstElementChild.addEventListener("click",(()=>{e>1&&n(e-1)})),a.refs.boxNumbersPage.lastElementChild.addEventListener("click",(()=>{e<t&&n(e+1)})))}a=r("1O3u4"),o=r("2mJPI");function g(e){(async function(e=1){const t={option:"/trending/movie/day",page:e};(0,o.makeLangParam)(t),window.loader();try{const e=await window.filmoteka.fetchFilms(t);return window.loaderRemove(),e}catch(e){console.log(e),window.loaderRemove()}})(e).then((e=>(f(),(0,u.createFilmCardMarkup)(e.results),e))).then((e=>{m(e,g)}))}a.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&g(e.target.textContent)}));a=r("1O3u4"),u=r("dSqGA");function p(e){const{poster_path:t,title:n,id:r}=e;let a;return a=t?`${u.BASE_IMAGES_URL}${t}`:u.DEFAULT_IMG,`<li class="slider__item">\n                <img class="slider-film__img" src="${a}" alt="${n}" loading="lazy" width="" data-id=${r}>                \n            </li>`}async function w(){const e={option:"/trending/movie/week"},t=await window.filmoteka.fetchFilms(e);let n="";return t.results.forEach((e=>{n+=p(e)})),n}var h=r("4NA3t"),v=r("1i23U"),b=r("2shzp");const _=(a=r("1O3u4")).refs.newsWrapper.offsetWidth,y=a.refs.news.scrollWidth;r("eWCmQ");a=r("1O3u4"),u=r("dSqGA"),o=r("2mJPI");function L(){setTimeout((()=>{a.refs.massages.classList.add("hidden")}),5e3)}a.refs.searchForm.addEventListener("submit",(async function(e){e.preventDefault();const t=a.refs.searchInput.value;console.log(t);const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t.trim())}`};if(""===t)return a.refs.massages.classList.remove("hidden"),void L();(0,o.makeLangParam)(n),window.loader();try{const e=await window.filmoteka.fetchFilms(n);if(0===e.results.length)return a.refs.massages.classList.remove("hidden"),L(),a.refs.searchForm.reset(),void window.loaderRemove();console.log(e),f(),(0,u.createFilmCardMarkup)(e.results),a.refs.searchForm.reset(),a.refs.modalOffer.innerHTML="",window.loaderRemove()}catch(e){console.log(e),window.loaderRemove()}})),r("d6MLv");l=r("8NSUd"),a=r("1O3u4");var S=r("8QeDr");u=r("dSqGA");async function I(e){const{id:t,poster_path:n,genre_ids:r,title:a,release_date:i,vote_average:o}=e;let s,l="";try{l=(await(0,S.getGenres)()).filter((e=>r.includes(e.id))).map((e=>e.name)).join(", ");let e=localStorage.getItem("siteOptions");""===l&&"ua"===e&&(l="Потрібно подивитись"),""===l&&"en"===e&&(l="Need watch")}catch(e){console.log(e)}return s=n?`https://image.tmdb.org/t/p/w500${n}`:u.DEFAULT_IMG,`<li class="input-offer__item" data-id="${t}">              \n              <img class="input-offer__img" src="${s}" alt="${a}"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">${a}</h3>\n                  <p class="input-offer__genres">${l}</p>\n                  <p id="release_date">\n                  ${i}<span class="film-card__rating input-offer__rating">${o}</span>\n                  </p>                      \n              </div>              \n          </li>`}o=r("2mJPI");var k={},F=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,x=/^0o[0-7]+$/i,E=parseInt,T="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,M=T||N||Function("return this")(),A=Object.prototype.toString,B=Math.max,C=Math.min,D=function(){return M.Date.now()};function j(e,t,n){var r,a,i,o,s,l,c=0,d=!1,f=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function g(e){return c=e,s=setTimeout(w,t),d?m(e):o}function p(e){var n=e-l;return void 0===l||n>=t||n<0||f&&e-c>=i}function w(){var e=D();if(p(e))return h(e);s=setTimeout(w,function(e){var n=t-(e-l);return f?C(n,i-(e-c)):n}(e))}function h(e){return s=void 0,u&&r?m(e):(r=a=void 0,o)}function v(){var e=D(),n=p(e);if(r=arguments,a=this,l=e,n){if(void 0===s)return g(l);if(f)return s=setTimeout(w,t),m(l)}return void 0===s&&(s=setTimeout(w,t)),o}return t=H(t)||0,G(n)&&(d=!!n.leading,i=(f="maxWait"in n)?B(H(n.maxWait)||0,t):i,u="trailing"in n?!!n.trailing:u),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=a=s=void 0},v.flush=function(){return void 0===s?o:h(D())},v}function G(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==A.call(e)}(e))return NaN;if(G(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=G(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(F,"");var n=$.test(e);return n||x.test(e)?E(e.slice(2),n?2:8):O.test(e)?NaN:+e}k=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return G(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),j(e,t,{leading:r,maxWait:t,trailing:a})};a.refs.searchInput.addEventListener("input",k((async function(e){const t=e.target.value.trim();if(t.length<3)return a.refs.searchInput.classList.add("not-valid"),void(a.refs.modalOffer.innerHTML="");a.refs.modalOffer.innerHTML="",a.refs.searchInput.classList.remove("not-valid");const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t)}`};try{(0,o.makeLangParam)(n);const e=await window.filmoteka.fetchFilms(n);e.results.sort(((e,t)=>t.vote_average-e.vote_average));let t=3;if(0===e.results.length)return;e.results.length<t&&(t=e.results.length);let r="";for(let n=0;n<t;n+=1)r+=await I(e.results[n]);a.refs.modalOffer.insertAdjacentHTML("beforeend",r)}catch(e){console.log(e)}}),1e3)),a.refs.searchInput.addEventListener("focusout",(e=>{setTimeout((()=>{a.refs.modalOffer.classList.add("visually-hidden")}),150)})),a.refs.searchInput.addEventListener("focusin",(e=>{a.refs.modalOffer.classList.remove("visually-hidden")})),a.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){a.refs.modalOffer.innerHTML="",a.refs.searchForm.reset(),a.refs.modalOverlay.classList.remove("visually-hidden");const t=e.target.dataset.id;window.modal.openModal(t),a.refs.modalOverlay.dataset.modal=t}})),(a=r("1O3u4")).refs.modalTeamBtnOpen.onclick=function(){a.refs.modalTeam.style.display="block"},a.refs.modalTEamBtnClose.onclick=function(){a.refs.modalTeam.style.display="none"},window.onclick=function(e){e.target===a.refs.modalTeam&&(a.refs.modalTeam.style.display="none")},window.filmoteka=new(0,i.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,s.MovieLibrary),window.filterHendler=new class{ratingFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}genreFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}dataFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}updateFilters(){localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((e=>{f(),(0,u.createFilmCardMarkup)(e.results)})).finally((()=>window.loaderRemove()))):g()}constructor(){let e=(new Date).getFullYear();a.refs.dateFilter.innerHTML=(()=>{let t='<option value="" selected data-text="yearsFilter">Years</option>';for(let n=e;n>=1900;n-=1)t+=`<option value="${n}">${n}</option>`;return t})()}},window.modal=new(0,h.Modal),window.loader=v.spinerStart,window.loaderRemove=v.spinerStop;new class{fetchNews(){try{let e=localStorage.getItem("siteOptions"),t="uk";"ua"===e&&(t="uk"),"eng"===e&&(t="en")}catch(e){console.log(e)}new Date,lang;let e={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Ukraine",lang:lang,sort_by:"relevancy",page:"1"},headers:{"x-api-key":"1BYQ_xWnCGdOZO5vADf9kDQuB5bTYYz8y-IZQnUBnbw"}};b.default.request(e).then((e=>{this.newsArr=e.data.articles,console.log(this.newsArr),localStorage.setItem("newsArr",JSON.stringify(this.newsArr)),localStorage.setItem("upDate",(new Date).getDate()),this.updateNews()})).catch((e=>{console.error(e)}))}updateNews(){let e="";for(;e+=this.newsArr[Math.floor(Math.random()*this.newsArr.length)].title,!(e.length>400);)e+=" • ";a.refs.news.textContent=e}move(){var e=getComputedStyle(a.refs.news).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,a.refs.news.style.transform=-e>=y?"translateX("+_+"px)":"translateX("+e+"px)"}constructor(){this.toDate=(new Date).getDate(),localStorage.getItem("newsArr")&&null!=localStorage.getItem("newsArr")?(this.newsArr=JSON.parse(localStorage.getItem("newsArr")),this.upDate=localStorage.getItem("upDate"),this.toDate!=this.upDate?this.fetchNews():this.updateNews()):this.fetchNews();setInterval(this.move,40)}};a.refs.login.addEventListener("click",(e=>{window.fireBase.login()})),window.addEventListener("scroll",c.hidenButton),document.querySelector(".btn-up").addEventListener("click",c.upClick),(0,o.setLagnuage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(()=>{(0,o.changeLagnuage)(),localStorage.removeItem("newsArr"),location.reload()})),(0,d.setColor)(),a.refs.colorSelector.addEventListener("click",d.changeColor),function(){let e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));let t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));let n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),async function(){let e=0;const t=document.querySelector(".slider-container"),n=await w();a.refs.jsSliderContainer.innerHTML=n;const r=document.querySelectorAll(".slider__item"),i=r.length,o=t.clientWidth/7,s=1*o;r.forEach((e=>{e.style.minWidth=`${o}px`})),window.addEventListener("resize",(()=>{const e=t.clientWidth/7;r.forEach((t=>{t.style.minWidth=`${e}px`}))})),a.refs.btnNext.addEventListener("click",(()=>{const t=i-(Math.abs(e)+7*o)/o;e-=t>=1?s:t*o,l(),c()})),a.refs.btnPrev.addEventListener("click",(()=>{const t=Math.abs(e)/o;e+=t>=1?s:t*o,l(),c()}));const l=()=>{a.refs.track.style.transform=`translateX(${e}px)`},c=()=>{a.refs.btnPrev.disabled=0===e,a.refs.btnNext.disabled=e<=-(i-7)*o};l(),c()}();
//# sourceMappingURL=index.b39fef43.js.map
