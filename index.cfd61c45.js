var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var a=r("1O3u4"),i=r("6cLkv"),s=r("lgxtW"),o=r("d3vkx"),l=r("8NSUd"),c=r("8ENg6"),d=r("dPnIr");a=r("1O3u4"),a=r("1O3u4");function u(){a.refs.container.innerHTML="",a.refs.container.dataset.ids=""}var f=r("dSqGA");f=r("dSqGA"),a=r("1O3u4");function m({page:e,total_pages:t}){a.refs.boxNumbersPage.innerHTML="";let n=[];if(document.documentElement.clientWidth>767){if(t>9&&e<6){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(let e=1;e<=t;e+=1){if(e>8){n.push('<span class="container__numbers-span">...</span>'),n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);break}n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`)}n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t<9){for(let e=1;e<=t&&!(e>9);e+=1)n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t>9&&e>=6&&e<t-6){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),n.push('<li class="container__numbers-item" data-page="1">1</li>'),n.push('<span class="container__numbers-span">...</span>');for(let t=e-2;t<e;t+=1)n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);for(let t=e+1;t<e+3;t+=1)n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);n.push('<span class="container__numbers-span">...</span>'),n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`),n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t>9&&e>t-6){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(let e=t;e>=t-8;e-=1)n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);n.push('<span class="container__numbers-span">...</span>'),n.push('<li class="container__numbers-item" data-page="1">1</li>'),n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.reverse().join(""))}}else{if(t>5&&e<4){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(let e=1;e<=t&&!(e>5);e+=1)n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t<6){for(let e=1;e<=t&&!(e>5);e+=1)n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t>5&&e>=4&&e<t-4){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(let t=e-2;t<e;t+=1)n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);for(let t=e+1;t<e+3;t+=1)n.push(`<li class="container__numbers-item" data-page="${t}">${t}</li>`);n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.join(""))}if(t>5&&e>t-4){n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(let e=t;e>=t-5;e-=1)n.push(`<li class="container__numbers-item" data-page="${e}">${e}</li>`);n.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.refs.boxNumbersPage.insertAdjacentHTML("beforeend",n.reverse().join(""))}}document.querySelector(`[data-page="${e}"]`).classList.add("is-active-page"),(t>9&&document.documentElement.clientWidth>767||t>5&&document.documentElement.clientWidth<768)&&(a.refs.boxNumbersPage.firstElementChild.addEventListener("click",(()=>{let t=e;t>1&&window.filterHendler.updateFilters(t-1)})),a.refs.boxNumbersPage.lastElementChild.addEventListener("click",(()=>{let n=e;n<t&&window.filterHendler.updateFilters(n+1)})))}a=r("1O3u4"),s=r("lgxtW");function p(e){(async function(e=1){const t={option:"/trending/movie/day",page:e};(0,s.makeLangParam)(t),window.loader();try{const e=await window.filmoteka.fetchFilms(t);return window.loaderRemove(),e}catch(e){console.log(e),window.loaderRemove()}})(e).then((e=>(u(),(0,f.createFilmCardMarkup)(e.results),e))).then((e=>{m(e)}))}a.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&window.filterHendler.updateFilters(e.target.textContent)}));a=r("1O3u4"),f=r("dSqGA");function g(e){const{poster_path:t,title:n,id:r}=e;let a;return a=t?`${f.BASE_IMAGES_URL}${t}`:f.DEFAULT_IMG,`<li class="slider__item">\n                <img class="slider-film__img" src="${a}" alt="${n}" loading="lazy"  height="500" data-id=${r}>                \n            </li>`}async function w(){const e={option:"/trending/movie/week"},t=await window.filmoteka.fetchFilms(e);let n="";return t.results.forEach((e=>{n+=g(e)})),n}function v(e){return e.clientWidth<=900?4:e.clientWidth<1092?5:e.clientWidth>=1092?6:void 0}var h=r("4NA3t"),_=r("1i23U");r("2shzp");(a=r("1O3u4")).refs.newsWrapper.offsetWidth,a.refs.news.scrollWidth;r("eWCmQ");a=r("1O3u4"),f=r("dSqGA"),s=r("lgxtW");function b(){setTimeout((()=>{a.refs.massages.classList.add("hidden")}),5e3)}a.refs.searchForm.addEventListener("submit",(async function(e){e.preventDefault();const t=a.refs.searchInput.value;console.log(t);const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t.trim())}`};if(""===t)return a.refs.massages.classList.remove("hidden"),void b();(0,s.makeLangParam)(n),window.loader();try{const e=await window.filmoteka.fetchFilms(n);if(0===e.results.length)return a.refs.massages.classList.remove("hidden"),b(),a.refs.searchForm.reset(),void window.loaderRemove();console.log(e),u(),(0,f.createFilmCardMarkup)(e.results),a.refs.searchForm.reset(),a.refs.modalOffer.innerHTML="",window.loaderRemove()}catch(e){console.log(e),window.loaderRemove()}})),r("d6MLv");l=r("8NSUd"),a=r("1O3u4");var y=r("8QeDr");f=r("dSqGA");async function L(e){const{id:t,poster_path:n,genre_ids:r,title:a,release_date:i,vote_average:s}=e;let o,l="";try{l=(await(0,y.getGenres)()).filter((e=>r.includes(e.id))).map((e=>e.name)).join(", ");let e=localStorage.getItem("siteOptions");""===l&&"ua"===e&&(l="Потрібно подивитись"),""===l&&"en"===e&&(l="Need watch")}catch(e){console.log(e)}return o=n?`https://image.tmdb.org/t/p/w500${n}`:f.DEFAULT_IMG,`<li class="input-offer__item" data-id="${t}">              \n              <img class="input-offer__img" src="${o}" alt="${a}"\n              loading="lazy" width="70" height="150">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">${a}</h3>\n                  <p class="input-offer__genres">${l}</p>\n                  <p id="release_date">\n                  ${i}<span class="film-card__rating input-offer__rating">${s}</span>\n                  </p>                      \n              </div>              \n          </li>`}s=r("lgxtW");var $={},x=/^\s+|\s+$/g,F=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt,I="object"==typeof e&&e&&e.Object===Object&&e,O="object"==typeof self&&self&&self.Object===Object&&self,M=I||O||Function("return this")(),T=Object.prototype.toString,j=Math.max,H=Math.min,N=function(){return M.Date.now()};function B(e,t,n){var r,a,i,s,o,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=a;return r=a=void 0,c=t,s=e.apply(i,n)}function p(e){return c=e,o=setTimeout(w,t),d?m(e):s}function g(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=i}function w(){var e=N();if(g(e))return v(e);o=setTimeout(w,function(e){var n=t-(e-l);return u?H(n,i-(e-c)):n}(e))}function v(e){return o=void 0,f&&r?m(e):(r=a=void 0,s)}function h(){var e=N(),n=g(e);if(r=arguments,a=this,l=e,n){if(void 0===o)return p(l);if(u)return o=setTimeout(w,t),m(l)}return void 0===o&&(o=setTimeout(w,t)),s}return t=W(t)||0,R(n)&&(d=!!n.leading,i=(u="maxWait"in n)?j(W(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==o&&clearTimeout(o),c=0,r=l=a=o=void 0},h.flush=function(){return void 0===o?s:v(N())},h}function R(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function W(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==T.call(e)}(e))return NaN;if(R(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=R(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(x,"");var n=S.test(e);return n||k.test(e)?E(e.slice(2),n?2:8):F.test(e)?NaN:+e}$=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return R(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),B(e,t,{leading:r,maxWait:t,trailing:a})};a.refs.searchInput.addEventListener("input",$((async function(e){const t=e.target.value.trim();if(t.length<3)return a.refs.searchInput.classList.add("not-valid"),void(a.refs.modalOffer.innerHTML="");a.refs.modalOffer.innerHTML="",a.refs.searchInput.classList.remove("not-valid");const n={option:"/search/movie",nameFilm:`&query=${encodeURIComponent(t)}`};try{(0,s.makeLangParam)(n);const e=await window.filmoteka.fetchFilms(n);e.results.sort(((e,t)=>t.vote_average-e.vote_average));let t=3;if(0===e.results.length)return;e.results.length<t&&(t=e.results.length);let r="";for(let n=0;n<t;n+=1)r+=await L(e.results[n]);a.refs.modalOffer.insertAdjacentHTML("beforeend",r)}catch(e){console.log(e)}}),1e3)),a.refs.searchInput.addEventListener("focusout",(e=>{setTimeout((()=>{a.refs.modalOffer.classList.add("visually-hidden")}),150)})),a.refs.searchInput.addEventListener("focusin",(e=>{a.refs.modalOffer.classList.remove("visually-hidden")})),a.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){a.refs.modalOffer.innerHTML="",a.refs.searchForm.reset(),a.refs.modalOverlay.classList.remove("visually-hidden");const t=e.target.dataset.id;window.modal.openModal(t),a.refs.modalOverlay.dataset.modal=t}})),r("ju0sR"),window.filmoteka=new(0,i.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,o.MovieLibrary),window.filterHendler=new class{ratingFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}genreFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}dataFilterOnChange(e){const t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}updateFilters(e=1){localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:e,option:"/discover/movie"}).then((e=>{u(),(0,f.createFilmCardMarkup)(e.results)})).finally((()=>window.loaderRemove()))):p(e)}constructor(){let e=(new Date).getFullYear();a.refs.dateFilter.innerHTML=(()=>{let t='<option value="" selected data-text="yearsFilter">Years</option>';for(let n=e;n>=1900;n-=1)t+=`<option value="${n}">${n}</option>`;return t})()}},window.modal=new(0,h.Modal),window.loader=_.spinerStart,window.loaderRemove=_.spinerStop,a.refs.login.addEventListener("click",(e=>{window.fireBase.login()})),window.addEventListener("scroll",c.hidenButton),document.querySelector(".btn-up").addEventListener("click",c.upClick),(0,s.setLanguage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(()=>{(0,s.changeLanguage)(),localStorage.removeItem("newsArr"),location.reload()})),(0,d.setColor)(),a.refs.colorSelector.addEventListener("click",d.changeColor),function(){let e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));let t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));let n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),async function(){let e=0,t=6;const n=document.querySelector(".slider-container"),r=await w();a.refs.jsSliderContainer.innerHTML=r;const i=document.querySelectorAll(".slider__item"),s=i.length;t=v(n);const o=n.clientWidth/t,l=1*o;i.forEach((e=>{e.style.minWidth=`${o}px`})),window.addEventListener("resize",(()=>{t=v(n);const r=n.clientWidth/t;i.forEach((e=>{e.style.minWidth=`${r}px`})),e=0,c(),d()})),a.refs.btnNext.addEventListener("click",(()=>{const n=i[0].clientWidth;console.log(n);const r=s-(Math.abs(e)+t*o)/o;e-=r>=1?l:r*o,c(),d()})),a.refs.btnPrev.addEventListener("click",(()=>{const t=Math.abs(e)/o;e+=t>=1?l:t*o,c(),d()}));const c=()=>{a.refs.track.style.transform=`translateX(${e}px)`},d=()=>{a.refs.btnPrev.disabled=0===e,a.refs.btnNext.disabled=e<=-(s-t)*o};c(),d()}();
//# sourceMappingURL=index.cfd61c45.js.map
