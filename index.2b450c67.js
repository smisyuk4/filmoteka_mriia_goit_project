!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var i=a("7Sf3J"),o=a("8x2sk"),s=a("bz3TN"),c=a("8kBMg"),l=a("gyWj4"),u=a("aHxE2"),d=a("9Isww"),f=a("8MBJY"),p=a("a2hTj");i=a("7Sf3J");function m(){i.refs.container.innerHTML=""}var v=a("5vsmo"),g=function(){"use strict";function t(){e(f)(this,t);var n=(new Date).getFullYear();document.querySelector("#date-filter").innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',t=n;t>=1900;t-=1)e+='<option value="'.concat(t,'">').concat(t,"</option>");return e}()}return e(p)(t,[{key:"ratingFilterOnChange",value:function(e){var t=e.target.value;""!==t?(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t),window.loader(),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){m(),(0,v.createFilmCardMarkup)(e.results)})).finally((function(){return window.loaderRemove()}))):localStorage.setItem("filterByRating","")}},{key:"genreFilterOnChange",value:function(e){var t=e.target.value;""!==t?(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){m(),(0,v.createFilmCardMarkup)(e.results)}))):localStorage.setItem("filterByGenre","")}},{key:"dataFilterOnChange",value:function(e){var t=e.target.value;""!==t?(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){m(),(0,v.createFilmCardMarkup)(e.results)}))):localStorage.setItem("dataFilter","")}}]),t}(),h=a("bpxeT"),w=a("2TvXO");i=a("7Sf3J");function b(e){var t=e.page,n=e.total_pages;i.refs.boxNumbersPage.innerHTML="";var r=[];if(n>9&&t<6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var a=1;a<=n;a+=1){if(a>8){r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>"));break}r.push('<li class="container__numbers-item" data-page="'.concat(a,'">').concat(a,"</li>"))}r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n<9){for(var o=1;o<=n&&!(o>9);o+=1)r.push('<li class="container__numbers-item" data-page="'.concat(o,'">').concat(o,"</li>"));i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>=6&&t<n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<span class="container__numbers-span">...</span>');for(var s=t-2;s<t;s+=1)r.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"));r.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var c=t+1;c<t+3;c+=1)r.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>")),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var l=n;l>=n-8;l-=1)r.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.reverse().join(""))}}function _(e){var t=e.page;document.querySelector('[data-page="'.concat(t,'"]')).classList.add("is-active-page")}v=a("5vsmo"),i=a("7Sf3J"),s=a("bz3TN");function y(e){(function(){return x.apply(this,arguments)})(e).then((function(e){return m(),(0,v.createFilmCardMarkup)(e.results),e})).then((function(e){b(e),_(e),function(e){var t=e.page,n=e.total_pages;i.refs.boxNumbersPage.firstElementChild.addEventListener("click",(function(){t>1&&y(t-1)})),i.refs.boxNumbersPage.lastElementChild.addEventListener("click",(function(){t<n&&y(t+1)}))}(e)}))}function x(){return x=e(h)(e(w).mark((function t(){var n,r,a,i=arguments;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r={option:"/trending/movie/day",page:n},(0,s.makeLangParam)(r),window.loader(),e.prev=5,e.next=8,window.filmoteka.fetchFilms(r);case 8:return a=e.sent,window.loaderRemove(),e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),window.loaderRemove();case 17:case"end":return e.stop()}}),t,null,[[5,13]])}))),x.apply(this,arguments)}i.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&y(e.target.textContent)}));h=a("bpxeT"),w=a("2TvXO");function k(){return L.apply(this,arguments)}function L(){return(L=e(h)(e(w).mark((function t(){var n,r;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",n={option:"/trending/movie/week"},e.next=4,window.filmoteka.fetchFilms(n);case 4:return r=e.sent,"",r.results.forEach((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path);null===e.poster_path&&(modalPoster="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"),ietmsHtml+='<li class="slider__item">\n                   <img class="slider-film__img" src="'.concat(t,'" alt="poster" loading="lazy" data-id=').concat(e.id,'>\n                   <div class="film-card__box-info slider-film__title">\n                   </div>\n                         </li>')})),e.abrupt("return","");case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=e(h)(e(w).mark((function t(){var n,r,a,i,o,s,c,l,u,d,f,p,m,v;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=7,a=1,i=document.querySelector(".slider-container"),o=document.querySelector(".slider__track"),s=document.querySelector(".btn-prev"),c=document.querySelector(".btn-next"),e.next=9,k();case 9:l=e.sent,document.querySelector(".js-slider-container").innerHTML=l,u=document.querySelectorAll(".slider__item"),d=u.length,f=i.clientWidth/r,p=a*f,u.forEach((function(e){e.style.minWidth="".concat(f,"px")})),c.addEventListener("click",(function(){var e=d-(Math.abs(n)+r*f)/f;n-=e>=a?p:e*f,m(),v()})),s.addEventListener("click",(function(){var e=Math.abs(n)/f;n+=e>=a?p:e*f,m(),v()})),v=function(){s.disabled=0===n,c.disabled=n<=-(d-r)*f},(m=function(){o.style.transform="translateX(".concat(n,"px)")})(),v();case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var T=a("bUH0J");a("iU1Pc");h=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J");a("8x2sk");v=a("5vsmo");a("iU1Pc");s=a("bz3TN");function F(){return(F=e(h)(e(w).mark((function t(n){var r,a,o;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"/search/movie",r=i.refs.searchInput.value,console.log(r),a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r.trim()))},""!==r){e.next=9;break}return i.refs.massages.classList.remove("hidden"),O(),e.abrupt("return");case 9:return(0,s.makeLangParam)(a),window.loader(),e.prev=11,e.next=14,window.filmoteka.fetchFilms(a);case 14:if(0!==(o=e.sent).results.length){e.next=21;break}return i.refs.massages.classList.remove("hidden"),O(),i.refs.searchForm.reset(),window.loaderRemove(),e.abrupt("return");case 21:console.log(o),m(),(0,v.createFilmCardMarkup)(o.results),i.refs.searchForm.reset(),i.refs.modalOffer.innerHTML="",window.loaderRemove(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(11),console.log(e.t0),window.loaderRemove();case 33:case"end":return e.stop()}}),t,null,[[11,29]])})))).apply(this,arguments)}function O(){setTimeout((function(){i.refs.massages.classList.add("hidden")}),5e3)}i.refs.searchForm.addEventListener("submit",(function(e){return F.apply(this,arguments)}));h=a("bpxeT"),w=a("2TvXO");a("7Sf3J"),a("8x2sk"),a("7Sf3J");l=a("gyWj4"),h=a("bpxeT"),w=a("2TvXO"),i=a("7Sf3J");a("8x2sk");h=a("bpxeT"),w=a("2TvXO");var I=a("dGF2p"),M="https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg";function B(e){return E.apply(this,arguments)}function E(){return(E=e(h)(e(w).mark((function t(n){var r,a,i,o,s,c,l,u,d,f;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a=n.poster_path,i=n.genre_ids,o=n.title,s=n.release_date,c=n.vote_average,l="",e.prev=2,e.next=5,(0,I.getGenres)();case 5:u=e.sent,l=u.filter((function(e){return i.includes(e.id)})).map((function(e){return e.name})).join(", "),d=localStorage.getItem("siteOptions"),""===l&&"ua"===d&&(l="Потрібно подивитись"),""===l&&"en"===d&&(l="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return f=a?"https://image.tmdb.org/t/p/w500".concat(a):M,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(r,'">              \n              <img class="input-offer__img" src="').concat(f,'" alt="').concat(o,'"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(l,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(c,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}s=a("bz3TN");var j={},C=a("l5bVx"),N="Expected a function",q=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,P=/^0o[0-7]+$/i,J=parseInt,G="object"==typeof t&&t&&t.Object===Object&&t,X="object"==typeof self&&self&&self.Object===Object&&self,A=G||X||Function("return this")(),W=Object.prototype.toString,D=Math.max,U=Math.min,z=function(){return A.Date.now()};function Y(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(N);function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function m(e){return l=e,s=setTimeout(g,t),u?p(e):o}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function g(){var e=z();if(v(e))return h(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?U(n,i-(e-l)):n}(e))}function h(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function w(){var e=z(),n=v(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),o}return t=V(t)||0,$(n)&&(u=!!n.leading,i=(d="maxWait"in n)?D(V(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},w.flush=function(){return void 0===s?o:h(z())},w}function $(t){var n=void 0===t?"undefined":e(C)(t);return!!t&&("object"==n||"function"==n)}function V(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(C)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==W.call(t)}(t))return NaN;if($(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=$(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");var r=R.test(t);return r||P.test(t)?J(t.slice(2),r?2:8):H.test(t)?NaN:+t}j=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(N);return $(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Y(e,t,{leading:r,maxWait:t,trailing:a})};function K(){return(K=e(h)(e(w).mark((function t(n){var r,a,o,c,l,u;return e(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=n.target.value.trim()).length<3)){e.next=5;break}return i.refs.searchInput.classList.add("not-valid"),i.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return i.refs.modalOffer.innerHTML="",i.refs.searchInput.classList.remove("not-valid"),"/search/movie",a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r))},e.prev=9,(0,s.makeLangParam)(a),e.next=13,window.filmoteka.fetchFilms(a);case 13:if((o=e.sent).results.sort((function(e,t){return t.vote_average-e.vote_average})),c=3,0!==o.results.length){e.next=18;break}return e.abrupt("return");case 18:o.results.length<c&&(c=o.results.length),l="",u=0;case 21:if(!(u<c)){e.next=29;break}return e.t0=l,e.next=25,B(o.results[u]);case 25:l=e.t0+=e.sent;case 26:u+=1,e.next=21;break;case 29:i.refs.modalOffer.insertAdjacentHTML("beforeend",l),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(9),console.log(e.t1);case 35:case"end":return e.stop()}}),t,null,[[9,32]])})))).apply(this,arguments)}i.refs.searchInput.addEventListener("input",j((function(e){return K.apply(this,arguments)}),500)),i.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){i.refs.modalOffer.innerHTML="",i.refs.searchForm.reset(),console.log(e.target.dataset.id),i.refs.modalOverlay.classList.remove("visually-hidden");var t=e.target.dataset.id;window.modal.openModal(t),i.refs.modalOverlay.dataset.modal=t}}));var Q=document.getElementById("modal-team"),Z=document.getElementById("modal-team-Btn"),ee=document.getElementsByClassName("close")[0];Z.onclick=function(){Q.style.display="block"},ee.onclick=function(){Q.style.display="none"},window.onclick=function(e){e.target==Q&&(Q.style.display="none")};h=a("bpxeT"),f=a("8MBJY"),p=a("a2hTj"),w=a("2TvXO"),a("dIxxU");var te=document.querySelector(".marquee-wrapper"),ne=document.querySelector(".marquee"),re=te.offsetWidth,ae=ne.scrollWidth;setInterval((function(){var e=getComputedStyle(ne).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,ne.style.transform=-e>=ae?"translateX("+re+"px)":"translateX("+e+"px)"}),40);var ie=a("j0SV0");window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,c.MovieLibrary),window.filterHendler=new g,window.modal=new(0,T.Modal),window.loader=ie.spinerStart,window.loaderRemove=ie.spinerStop,i.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),window.addEventListener("scroll",u.hidenButton),document.querySelector(".btn-up").addEventListener("click",u.upClick),(0,s.setLagnuage)(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLagnuage)(),window.movieLibrary.updateLang(),location.reload()})),(0,d.setColor)(),i.refs.colorSelector.addEventListener("click",d.changeColor),y(),function(){var e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));var t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));var n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"))}(),function(){S.apply(this,arguments)}()}();
//# sourceMappingURL=index.2b450c67.js.map
