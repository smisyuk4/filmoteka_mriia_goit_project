!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var i=a("7Sf3J"),o=a("8x2sk"),s=a("bz3TN"),c=a("8kBMg"),l=a("gyWj4"),u=a("aHxE2"),d=a("9Isww"),f=a("8MBJY"),p=a("a2hTj");i=a("7Sf3J");function m(){i.refs.container.innerHTML=""}var g=a("5vsmo"),v=a("bpxeT"),h=a("2TvXO");i=a("7Sf3J");function w(e){var t=e.page,n=e.total_pages;i.refs.boxNumbersPage.innerHTML="";var r=[];if(n>9&&t<6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var a=1;a<=n;a+=1){if(a>8){r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>"));break}r.push('<li class="container__numbers-item" data-page="'.concat(a,'">').concat(a,"</li>"))}r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n<9){for(var o=1;o<=n&&!(o>9);o+=1)r.push('<li class="container__numbers-item" data-page="'.concat(o,'">').concat(o,"</li>"));i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>=6&&t<n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<span class="container__numbers-span">...</span>');for(var s=t-2;s<t;s+=1)r.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"));r.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var c=t+1;c<t+3;c+=1)r.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>")),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.join(""))}if(n>9&&t>n-6){r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var l=n;l>=n-8;l-=1)r.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));r.push('<span class="container__numbers-span">...</span>'),r.push('<li class="container__numbers-item" data-page="1">1</li>'),r.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),i.refs.boxNumbersPage.insertAdjacentHTML("beforeend",r.reverse().join(""))}}function b(e){var t=e.page;document.querySelector('[data-page="'.concat(t,'"]')).classList.add("is-active-page")}g=a("5vsmo"),i=a("7Sf3J"),s=a("bz3TN");function y(e){(function(){return _.apply(this,arguments)})(e).then((function(e){return m(),(0,g.createFilmCardMarkup)(e.results),e})).then((function(e){w(e),b(e),function(e){var t=e.page,n=e.total_pages;i.refs.boxNumbersPage.firstElementChild.addEventListener("click",(function(){t>1&&y(t-1)})),i.refs.boxNumbersPage.lastElementChild.addEventListener("click",(function(){t<n&&y(t+1)}))}(e)}))}function _(){return _=e(v)(e(h).mark((function t(){var n,r,a,i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,r={option:"/trending/movie/day",page:n},(0,s.makeLangParam)(r),window.loader(),e.prev=5,e.next=8,window.filmoteka.fetchFilms(r);case 8:return a=e.sent,window.loaderRemove(),e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0),window.loaderRemove();case 17:case"end":return e.stop()}}),t,null,[[5,13]])}))),_.apply(this,arguments)}i.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&y(e.target.textContent)}));var k=function(){"use strict";function t(){e(f)(this,t);var n=(new Date).getFullYear();document.querySelector("#date-filter").innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',t=n;t>=1900;t-=1)e+='<option value="'.concat(t,'">').concat(t,"</option>");return e}()}return e(p)(t,[{key:"ratingFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByRating",""),window.filmoteka.filterByRating=""):(window.filmoteka.filterByRating=t,localStorage.setItem("filterByRating",t)),window.filterHendler.updateFilters()}},{key:"genreFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("filterByGenre",""),window.filmoteka.filterByGenre=""):(window.filmoteka.filterByGenre=t,localStorage.setItem("filterByGenre",t)),window.filterHendler.updateFilters()}},{key:"dataFilterOnChange",value:function(e){var t=e.target.value;""===t?(localStorage.setItem("dataFilter",""),window.filmoteka.dataFilter=""):(window.filmoteka.dataFilter=t,localStorage.setItem("dataFilter",t)),window.filterHendler.updateFilters()}},{key:"updateFilters",value:function(){localStorage.getItem("filterByRating")||localStorage.getItem("filterByGenre")||localStorage.getItem("dataFilter")?(window.loader(),filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){m(),(0,g.createFilmCardMarkup)(e.results)})).finally((function(){return window.loaderRemove()}))):y()}}]),t}();v=a("bpxeT"),h=a("2TvXO");function x(){return S.apply(this,arguments)}function S(){return(S=e(v)(e(h).mark((function t(){var n,r,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",n={option:"/trending/movie/week"},e.next=4,window.filmoteka.fetchFilms(n);case 4:return r=e.sent,a="",r.results.forEach((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path);null===e.poster_path&&(modalPoster="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"),a+='<li class="slider__item">\n                   <img class="slider-film__img" src="'.concat(t,'" alt="poster" loading="lazy" data-id=').concat(e.id,'>\n                   <div class="film-card__box-info slider-film__title">\n                   </div>\n                         </li>')})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=e(v)(e(h).mark((function t(){var n,r,a,i,o,s,c,l,u,d,f,p,m,g;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=7,a=1,i=document.querySelector(".slider-container"),o=document.querySelector(".slider__track"),s=document.querySelector(".btn-prev"),c=document.querySelector(".btn-next"),e.next=9,x();case 9:l=e.sent,document.querySelector(".js-slider-container").innerHTML=l,u=document.querySelectorAll(".slider__item"),d=u.length,f=i.clientWidth/r,p=a*f,u.forEach((function(e){e.style.minWidth="".concat(f,"px")})),c.addEventListener("click",(function(){var e=d-(Math.abs(n)+r*f)/f;n-=e>=a?p:e*f,m(),g()})),s.addEventListener("click",(function(){var e=Math.abs(n)/f;n+=e>=a?p:e*f,m(),g()})),g=function(){s.disabled=0===n,c.disabled=n<=-(d-r)*f},(m=function(){o.style.transform="translateX(".concat(n,"px)")})(),g();case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var F=a("bUH0J"),T=a("j0SV0"),I=(f=a("8MBJY"),p=a("a2hTj"),a("dIxxU")),B=document.querySelector(".marquee-wrapper"),O=document.querySelector(".marquee"),q=B.offsetWidth,E=O.scrollWidth,M=function(){"use strict";function t(){e(f)(this,t),this.wrapper=document.querySelector(".marquee-wrapper"),this.marquee=document.querySelector(".marquee"),this.wrapperWidth=this.wrapper.offsetWidth,this.marqueeWidth=this.marquee.scrollWidth;setInterval(this.move,40);this.fetchNews()}return e(p)(t,[{key:"fetchNews",value:function(){var e,t=this,n=localStorage.getItem("siteOptions");"ua"===n&&(e="ua"),"eng"===n&&(e="us");var r="https://newsapi.org/v2/top-headlines?sortBy=popularity&country=".concat(e,"&from=").concat(new Date,"&apiKey=de1926e9c94248b9b9aaffe3afcbac80");return I.default.get(r).then((function(e){for(var n="",r=0;!((n+=e.data.articles[r].title).length>400);)n+=" • ",r++;t.marquee.textContent=n}))}},{key:"move",value:function(){var e=getComputedStyle(O).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,O.style.transform=-e>=E?"translateX("+q+"px)":"translateX("+e+"px)"}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"dataFilter",get:function(){return this._dateFilter}}]),t}();a("iU1Pc");v=a("bpxeT"),h=a("2TvXO"),i=a("7Sf3J");a("8x2sk");g=a("5vsmo");a("iU1Pc");s=a("bz3TN");function j(){return(j=e(v)(e(h).mark((function t(n){var r,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"/search/movie",r=i.refs.searchInput.value,console.log(r),a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r.trim()))},""!==r){e.next=9;break}return i.refs.massages.classList.remove("hidden"),C(),e.abrupt("return");case 9:return(0,s.makeLangParam)(a),window.loader(),e.prev=11,e.next=14,window.filmoteka.fetchFilms(a);case 14:if(0!==(o=e.sent).results.length){e.next=21;break}return i.refs.massages.classList.remove("hidden"),C(),i.refs.searchForm.reset(),window.loaderRemove(),e.abrupt("return");case 21:console.log(o),m(),(0,g.createFilmCardMarkup)(o.results),i.refs.searchForm.reset(),i.refs.modalOffer.innerHTML="",window.loaderRemove(),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(11),console.log(e.t0),window.loaderRemove();case 33:case"end":return e.stop()}}),t,null,[[11,29]])})))).apply(this,arguments)}function C(){setTimeout((function(){i.refs.massages.classList.add("hidden")}),5e3)}i.refs.searchForm.addEventListener("submit",(function(e){return j.apply(this,arguments)}));v=a("bpxeT"),h=a("2TvXO");a("7Sf3J"),a("8x2sk"),a("44sU7");l=a("gyWj4"),v=a("bpxeT"),h=a("2TvXO"),i=a("7Sf3J");a("8x2sk");v=a("bpxeT"),h=a("2TvXO");var N=a("dGF2p"),H="https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg";function R(e){return P.apply(this,arguments)}function P(){return(P=e(v)(e(h).mark((function t(n){var r,a,i,o,s,c,l,u,d,f;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a=n.poster_path,i=n.genre_ids,o=n.title,s=n.release_date,c=n.vote_average,l="",e.prev=2,e.next=5,(0,N.getGenres)();case 5:u=e.sent,l=u.filter((function(e){return i.includes(e.id)})).map((function(e){return e.name})).join(", "),d=localStorage.getItem("siteOptions"),""===l&&"ua"===d&&(l="Потрібно подивитись"),""===l&&"en"===d&&(l="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return f=a?"https://image.tmdb.org/t/p/w500".concat(a):H,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(r,'">              \n              <img class="input-offer__img" src="').concat(f,'" alt="').concat(o,'"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(l,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(c,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}s=a("bz3TN");var W={},G=a("l5bVx"),J="Expected a function",A=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,X=/^0o[0-7]+$/i,z=parseInt,Y="object"==typeof t&&t&&t.Object===Object&&t,$="object"==typeof self&&self&&self.Object===Object&&self,K=Y||$||Function("return this")(),Q=Object.prototype.toString,V=Math.max,Z=Math.min,ee=function(){return K.Date.now()};function te(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(J);function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function m(e){return l=e,s=setTimeout(v,t),u?p(e):o}function g(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function v(){var e=ee();if(g(e))return h(e);s=setTimeout(v,function(e){var n=t-(e-c);return d?Z(n,i-(e-l)):n}(e))}function h(e){return s=void 0,f&&r?p(e):(r=a=void 0,o)}function w(){var e=ee(),n=g(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return m(c);if(d)return s=setTimeout(v,t),p(c)}return void 0===s&&(s=setTimeout(v,t)),o}return t=re(t)||0,ne(n)&&(u=!!n.leading,i=(d="maxWait"in n)?V(re(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},w.flush=function(){return void 0===s?o:h(ee())},w}function ne(t){var n=void 0===t?"undefined":e(G)(t);return!!t&&("object"==n||"function"==n)}function re(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(G)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==Q.call(t)}(t))return NaN;if(ne(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=ne(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(A,"");var r=U.test(t);return r||X.test(t)?z(t.slice(2),r?2:8):D.test(t)?NaN:+t}W=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(J);return ne(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),te(e,t,{leading:r,maxWait:t,trailing:a})};function ae(){return(ae=e(v)(e(h).mark((function t(n){var r,a,o,c,l,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=n.target.value.trim()).length<3)){e.next=5;break}return i.refs.searchInput.classList.add("not-valid"),i.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return i.refs.modalOffer.innerHTML="",i.refs.searchInput.classList.remove("not-valid"),"/search/movie",a={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(r))},e.prev=9,(0,s.makeLangParam)(a),e.next=13,window.filmoteka.fetchFilms(a);case 13:if((o=e.sent).results.sort((function(e,t){return t.vote_average-e.vote_average})),c=3,0!==o.results.length){e.next=18;break}return e.abrupt("return");case 18:o.results.length<c&&(c=o.results.length),l="",u=0;case 21:if(!(u<c)){e.next=29;break}return e.t0=l,e.next=25,R(o.results[u]);case 25:l=e.t0+=e.sent;case 26:u+=1,e.next=21;break;case 29:i.refs.modalOffer.insertAdjacentHTML("beforeend",l),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(9),console.log(e.t1);case 35:case"end":return e.stop()}}),t,null,[[9,32]])})))).apply(this,arguments)}i.refs.searchInput.addEventListener("input",W((function(e){return ae.apply(this,arguments)}),500)),i.refs.modalOffer.addEventListener("click",(function(e){if("IMG"===e.target.nodeName||"LI"===e.target.nodeName){i.refs.modalOffer.innerHTML="",i.refs.searchForm.reset(),console.log(e.target.dataset.id),i.refs.modalOverlay.classList.remove("visually-hidden");var t=e.target.dataset.id;window.modal.openModal(t),i.refs.modalOverlay.dataset.modal=t}}));var ie=document.getElementById("modal-team"),oe=document.getElementById("modal-team-Btn"),se=document.getElementsByClassName("close")[0];oe.onclick=function(){ie.style.display="block"},se.onclick=function(){ie.style.display="none"},window.onclick=function(e){e.target==ie&&(ie.style.display="none")},window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,c.MovieLibrary),window.filterHendler=new k,window.modal=new(0,F.Modal),window.loader=T.spinerStart,window.loaderRemove=T.spinerStop;new M;i.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),window.addEventListener("scroll",u.hidenButton),document.querySelector(".btn-up").addEventListener("click",u.upClick),(0,s.setLagnuage)(),window.movieLibrary.updateLang(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLagnuage)(),location.reload()})),(0,d.setColor)(),i.refs.colorSelector.addEventListener("click",d.changeColor),function(){var e=document.querySelector("#rating-filter");e.addEventListener("change",window.filterHendler.ratingFilterOnChange),localStorage.getItem("filterByRating")&&(window.filmoteka.filterByRating=localStorage.getItem("filterByRating"),e.value=localStorage.getItem("filterByRating"));var t=document.querySelector("#genre-filter");t.addEventListener("change",window.filterHendler.genreFilterOnChange),localStorage.getItem("filterByGenre")&&(window.filmoteka.filterByGenre=localStorage.getItem("filterByGenre"),t.value=localStorage.getItem("filterByGenre"));var n=document.querySelector("#date-filter");n.addEventListener("change",window.filterHendler.dataFilterOnChange),localStorage.getItem("dataFilter")&&(window.filmoteka.dataFilter=localStorage.getItem("dataFilter"),n.value=localStorage.getItem("dataFilter"));window.filterHendler.updateFilters()}(),function(){L.apply(this,arguments)}()}();
//# sourceMappingURL=index.5b898ed4.js.map
