!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("7Sf3J"),o=i("8x2sk"),s=i("bz3TN"),l=i("8kBMg"),c=i("gyWj4"),f=i("aHxE2"),u=i("9Isww"),d=i("8MBJY"),m=i("a2hTj");r=i("7Sf3J");function g(){r.refs.container.innerHTML=""}var p=i("5vsmo"),v=function(){"use strict";function t(){e(d)(this,t);var n=(new Date).getFullYear();document.querySelector("#date-filter").innerHTML=function(){for(var e='<option value="" selected data-text="yearsFilter">Years</option>',t=n;t>=1900;t-=1)e+='<option value="'.concat(t,'">').concat(t,"</option>");return e}()}return e(m)(t,[{key:"ratingFilterOnChenge",value:function(e){var t=e.target.value;window.filmoteka.filterByRating=void 0===t?t:+t,filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){g(),(0,p.createFilmCardMarkup)(e.results)}))}},{key:"dataFilterOnChange",value:function(e){var t=e.target.value;window.filmoteka.dataFilter=t,filmoteka.fetchFilms({region:"",page:1,option:"/discover/movie"}).then((function(e){g(),(0,p.createFilmCardMarkup)(e.results)}))}}]),t}(),h=i("bpxeT"),b=i("2TvXO");r=i("7Sf3J");function w(e){var t=e.page,n=e.total_pages;r.refs.boxNumbersPage.innerHTML="";var a=[];if(n>9&&t<6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>');for(var i=1;i<=n;i+=1){if(i>8){a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>"));break}a.push('<li class="container__numbers-item" data-page="'.concat(i,'">').concat(i,"</li>"))}a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(n<9){for(var o=1;o<=n&&!(o>9);o+=1)a.push('<li class="container__numbers-item" data-page="'.concat(o,'">').concat(o,"</li>"));r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(n>9&&t>=6&&t<n-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<span class="container__numbers-span">...</span>');for(var s=t-2;s<t;s+=1)a.push('<li class="container__numbers-item" data-page="'.concat(s,'">').concat(s,"</li>"));a.push('<li class="container__numbers-item" data-page="'.concat(t,'">').concat(t,"</li>"));for(var l=t+1;l<t+3;l+=1)a.push('<li class="container__numbers-item" data-page="'.concat(l,'">').concat(l,"</li>"));a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="'.concat(n,'">').concat(n,"</li>")),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.join(""))}if(n>9&&t>n-6){a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-right"></span></div>');for(var c=n;c>=n-8;c-=1)a.push('<li class="container__numbers-item" data-page="'.concat(c,'">').concat(c,"</li>"));a.push('<span class="container__numbers-span">...</span>'),a.push('<li class="container__numbers-item" data-page="1">1</li>'),a.push('<div class="container__numbers-arrow-box"><span class="container__numbers-arrow-left"></span></div>'),r.refs.boxNumbersPage.insertAdjacentHTML("beforeend",a.reverse().join(""))}}function y(e){var t=e.page;document.querySelector('[data-page="'.concat(t,'"]')).classList.add("is-active-page")}p=i("5vsmo"),r=i("7Sf3J"),s=i("bz3TN");function k(e){(function(){return x.apply(this,arguments)})(e).then((function(e){return g(),(0,p.createFilmCardMarkup)(e.results),e})).then((function(e){console.log(e),w(e),y(e),function(e){var t=e.page,n=e.total_pages;r.refs.boxNumbersPage.firstElementChild.addEventListener("click",(function(){t>1&&k(t-1)})),r.refs.boxNumbersPage.lastElementChild.addEventListener("click",(function(){t<n&&k(t+1)}))}(e)}))}function x(){return x=e(h)(e(b).mark((function t(){var n,a,i,r,o=arguments;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,a=window.filmoteka,i={option:"/trending/movie/day",page:n},(0,s.makeLangParam)(i),e.prev=5,e.next=8,a.fetchFilms(i);case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[5,12]])}))),x.apply(this,arguments)}r.refs.boxNumbersPage.addEventListener("click",(function(e){"LI"===e.target.nodeName&&k(e.target.textContent)}));h=i("bpxeT"),b=i("2TvXO");function _(){return L.apply(this,arguments)}function L(){return(L=e(h)(e(b).mark((function t(){var n,a,i,r;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.filmoteka,"/trending/movie/week",a={option:"/trending/movie/week"},e.next=5,n.fetchFilms(a);case 5:return i=e.sent,r="",i.results.forEach((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path);null===e.poster_path&&(modalPoster="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg"),r+='<li class="slider__item">\n                   <img class="slider-film__img" src="'.concat(t,'" alt="poster" loading="lazy" data-id=').concat(e.id,'>\n                   <div class="film-card__box-info slider-film__title">\n                     <h3 class="film-card__title ">').concat(e.original_title,"</h3>\n                   </div>\n                         </li>")})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=e(h)(e(b).mark((function t(){var n,a,i,r,o,s,l,c,f,u,d,m,g,p;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,a=7,i=1,r=document.querySelector(".slider-container"),o=document.querySelector(".slider__track"),s=document.querySelector(".btn-prev"),l=document.querySelector(".btn-next"),e.next=9,_();case 9:c=e.sent,document.querySelector(".js-slider-container").innerHTML=c,f=document.querySelectorAll(".slider__item"),u=f.length,d=r.clientWidth/a,m=i*d,f.forEach((function(e){e.style.minWidth="".concat(d,"px")})),l.addEventListener("click",(function(){var e=u-(Math.abs(n)+a*d)/d;n-=e>=i?m:e*d,g(),p()})),s.addEventListener("click",(function(){console.log(l);var e=Math.abs(n)/d;n+=e>=i?m:e*d,g(),p()})),p=function(){s.disabled=0===n,l.disabled=n<=-(u-a)*d},(g=function(){o.style.transform="translateX(".concat(n,"px)")})(),p();case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var M=i("bUH0J"),S=i("iU1Pc");S=i("iU1Pc"),h=i("bpxeT"),b=i("2TvXO"),r=i("7Sf3J"),o=i("8x2sk"),p=i("5vsmo");i("iU1Pc");s=i("bz3TN");function T(){return(T=e(h)(e(b).mark((function t(n){var a,i,l,c;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"/search/movie",a=new(0,o.Filmoteka),i=r.refs.searchInput.value,console.log(i),l={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(i.trim()))},""!==i){e.next=10;break}return r.refs.massages.classList.remove("hidden"),C(),e.abrupt("return");case 10:return(0,s.makeLangParam)(l),e.prev=11,e.next=14,a.fetchFilms(l);case 14:if(0!==(c=e.sent).results.length){e.next=20;break}return r.refs.massages.classList.remove("hidden"),C(),r.refs.searchForm.reset(),e.abrupt("return");case 20:console.log(c),g(),(0,p.createFilmCardMarkup)(c.results),r.refs.searchForm.reset(),r.refs.modalOffer.innerHTML="",e.next=30;break;case 27:e.prev=27,e.t0=e.catch(11),console.log(e.t0);case 30:case"end":return e.stop()}}),t,null,[[11,27]])})))).apply(this,arguments)}function C(){setTimeout((function(){r.refs.massages.classList.add("hidden")}),5e3)}r.refs.searchForm.addEventListener("submit",(function(e){return T.apply(this,arguments)}));h=i("bpxeT"),b=i("2TvXO");i("7Sf3J");o=i("8x2sk");i("7Sf3J");c=i("gyWj4"),h=i("bpxeT"),b=i("2TvXO"),r=i("7Sf3J"),o=i("8x2sk"),h=i("bpxeT"),b=i("2TvXO");var H=i("dGF2p"),j="https://i.postimg.cc/Y0NKgxRL/CDBD31-CB-2-C43-438-F-A140-5-CBA7-C480-AB3.jpg";function z(e){return E.apply(this,arguments)}function E(){return(E=e(h)(e(b).mark((function t(n){var a,i,r,o,s,l,c,f,u,d;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.id,i=n.poster_path,r=n.genre_ids,o=n.title,s=n.release_date,l=n.vote_average,c="",e.prev=2,e.next=5,(0,H.getGenres)();case 5:f=e.sent,c=f.filter((function(e){return r.includes(e.id)})).map((function(e){return e.name})).join(", "),u=localStorage.getItem("siteOptions"),""===c&&"ua"===u&&(c="Потрібно подивитись"),""===c&&"en"===u&&(c="Need watch"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:return d=i?"https://image.tmdb.org/t/p/w500".concat(i):j,e.abrupt("return",'<li class="input-offer__item" data-id="'.concat(a,'">              \n              <img class="input-offer__img" src="').concat(d,'" alt="').concat(o,'"\n              loading="lazy" width="70">              \n              <div class="input-offer__desc">                        \n                  <h3 class="input-offer__title">').concat(o,'</h3>\n                  <p class="input-offer__genres">').concat(c,'</p>\n                  <p id="release_date">\n                  ').concat(s,'<span class="film-card__rating input-offer__rating">').concat(l,"</span>\n                  </p>                      \n              </div>              \n          </li>"));case 18:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}s=i("bz3TN");var V={},F=i("l5bVx"),I="Expected a function",B=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,A=/^0o[0-7]+$/i,D=parseInt,W="object"==typeof t&&t&&t.Object===Object&&t,q="object"==typeof self&&self&&self.Object===Object&&self,Z=W||q||Function("return this")(),P=Object.prototype.toString,U=Math.max,G=Math.min,J=function(){return Z.Date.now()};function R(e,t,n){var a,i,r,o,s,l,c=0,f=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError(I);function m(t){var n=a,r=i;return a=i=void 0,c=t,o=e.apply(r,n)}function g(e){return c=e,s=setTimeout(v,t),f?m(e):o}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=r}function v(){var e=J();if(p(e))return h(e);s=setTimeout(v,function(e){var n=t-(e-l);return u?G(n,r-(e-c)):n}(e))}function h(e){return s=void 0,d&&a?m(e):(a=i=void 0,o)}function b(){var e=J(),n=p(e);if(a=arguments,i=this,l=e,n){if(void 0===s)return g(l);if(u)return s=setTimeout(v,t),m(l)}return void 0===s&&(s=setTimeout(v,t)),o}return t=$(t)||0,Y(n)&&(f=!!n.leading,r=(u="maxWait"in n)?U($(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=l=i=s=void 0},b.flush=function(){return void 0===s?o:h(J())},b}function Y(t){var n=void 0===t?"undefined":e(F)(t);return!!t&&("object"==n||"function"==n)}function $(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(F)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==P.call(t)}(t))return NaN;if(Y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=Y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(B,"");var a=X.test(t);return a||A.test(t)?D(t.slice(2),a?2:8):O.test(t)?NaN:+t}V=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(I);return Y(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),R(e,t,{leading:a,maxWait:t,trailing:i})};function Q(){return(Q=e(h)(e(b).mark((function t(n){var a,i,l,c,f,u,d;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=n.target.value.trim()).length<3)){e.next=5;break}return r.refs.searchInput.classList.add("not-valid"),r.refs.modalOffer.innerHTML="",e.abrupt("return");case 5:return r.refs.modalOffer.innerHTML="",r.refs.searchInput.classList.remove("not-valid"),"/search/movie",i=new(0,o.Filmoteka),l={option:"/search/movie",nameFilm:"&query=".concat(encodeURIComponent(a))},e.prev=10,(0,s.makeLangParam)(l),e.next=14,i.fetchFilms(l);case 14:if((c=e.sent).results.sort((function(e,t){return t.vote_average-e.vote_average})),f=3,0!==c.results.length){e.next=19;break}return e.abrupt("return");case 19:c.results.length<f&&(f=c.results.length),u="",d=0;case 22:if(!(d<f)){e.next=30;break}return e.t0=u,e.next=26,z(c.results[d]);case 26:u=e.t0+=e.sent;case 27:d+=1,e.next=22;break;case 30:r.refs.modalOffer.insertAdjacentHTML("beforeend",u),e.next=36;break;case 33:e.prev=33,e.t1=e.catch(10),console.log(e.t1);case 36:case"end":return e.stop()}}),t,null,[[10,33]])})))).apply(this,arguments)}r.refs.searchInput.addEventListener("input",V((function(e){return Q.apply(this,arguments)}),500)),r.refs.modalOffer.addEventListener("click",(function(e){if(console.log(e.target.nodeName),console.log(e.currentTarget.nodeName),"IMG"===e.target.nodeName||"LI"===e.target.nodeName){r.refs.modalOffer.innerHTML="",r.refs.searchForm.reset(),console.log(e.target.dataset.id),r.refs.modalOverlay.classList.remove("visually-hidden");var t=e.target.dataset.id;window.modal.openModal(t),r.refs.modalOverlay.dataset.modal=t}}));var K=document.getElementById("modal-team"),ee=document.getElementById("modal-team-Btn"),te=document.getElementsByClassName("close")[0];ee.onclick=function(){K.style.display="block"},te.onclick=function(){K.style.display="none"},window.onclick=function(e){e.target==K&&(K.style.display="none")};h=i("bpxeT"),d=i("8MBJY"),m=i("a2hTj"),b=i("2TvXO"),i("dIxxU");var ne=document.querySelector(".marquee-wrapper"),ae=document.querySelector(".marquee"),ie=ne.offsetWidth,re=ae.scrollWidth;setInterval((function(){var e=getComputedStyle(ae).transform.split(",");e=void 0===e[4]?-1:parseFloat(e[4])-1,ae.style.transform=-e>=re?"translateX("+ie+"px)":"translateX("+e+"px)"}),40);var oe,se,le={};oe=void 0!==t?t:"undefined"!=typeof window?window:le,se=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",a="Hourglass",i="Circle",r="Arrows",o="Dots",s="Pulse",l="Custom",c="Notiflix",f={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},u=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(u('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},m=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var a=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=m(e[a],n[a]):e[a]=n[a])};n<arguments.length;n++)a(arguments[n]);return e},g=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},v=function(c,p,v,b,w){if(!d("body"))return!1;t||h.Loading.init({});var y=m(!0,t,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof v&&!Array.isArray(v)){var k={};"object"==typeof p?k=p:"object"==typeof v&&(k=v),t=m(!0,t,k)}var x,_,L="";if("string"==typeof p&&p.length>0&&(L=p),b){var N="";(L=L.length>t.messageMaxLength?g(L).toString().substring(0,t.messageMaxLength)+"...":g(L).toString()).length>0&&(N='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+L+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var M="";if(c===n)x=t.svgSize,_=t.svgColor,x||(x="60px"),_||(_="#32c682"),M='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+_+'" width="'+x+'" height="'+x+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===a)M=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)M=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===r)M=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)M=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)M=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)M=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)M='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return u('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;M=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),T=e.innerWidth,C=S>=T?T-40+"px":S+"px",H='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(L.length>0?" nx-with-message":"")+'">'+M+"</div>",j=e.document.createElement("div");j.id=f.ID,j.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),j.style.zIndex=t.zindex,j.style.background=t.backgroundColor,j.style.animationDuration=t.cssAnimationDuration+"ms",j.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',j.style.display="flex",j.style.flexWrap="wrap",j.style.flexDirection="column",j.style.alignItems="center",j.style.justifyContent="center",t.rtl&&(j.setAttribute("dir","rtl"),j.classList.add("nx-rtl-on")),j.innerHTML=H+N,e.document.getElementById(j.id)||(e.document.body.appendChild(j),t.clickToClose&&e.document.getElementById(j.id).addEventListener("click",(function(){j.classList.add("nx-remove");var e=setTimeout((function(){null!==j.parentNode&&(j.parentNode.removeChild(j),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(f.ID))var z=e.document.getElementById(f.ID),E=setTimeout((function(){z.classList.add("nx-remove");var e=setTimeout((function(){null!==z.parentNode&&(z.parentNode.removeChild(z),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(E)}),w);t=m(!0,t,y)},h={Loading:{init:function(n){t=m(!0,f,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var a=e.document.createElement("style");a.id=n,a.innerHTML=t(),e.document.head.appendChild(a)}}(p,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return u("You have to initialize the Loading module before call Merge function."),!1;t=m(!0,t,e)},standard:function(e,t){v(n,e,t,!0,0)},hourglass:function(e,t){v(a,e,t,!0,0)},circle:function(e,t){v(i,e,t,!0,0)},arrows:function(e,t){v(r,e,t,!0,0)},dots:function(e,t){v(o,e,t,!0,0)},pulse:function(e,t){v(s,e,t,!0,0)},custom:function(e,t){v(l,e,t,!0,0)},notiflix:function(e,t){v(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),v(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var a=e.document.getElementById(f.ID);if(a)if(n.length>0){n=n.length>t.messageMaxLength?g(n).substring(0,t.messageMaxLength)+"...":g(n);var i=a.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var r=e.document.createElement("p");r.id=t.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=t.messageColor,r.style.fontSize=t.messageFontSize,r.innerHTML=n,a.appendChild(r)}}else u("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?m(!0,e.Notiflix,{Loading:h.Loading}):{Loading:h.Loading}},"function"==typeof define&&define.amd?define([],(function(){return se(oe)})):"object"==typeof le?le=se(oe):oe.Notiflix=se(oe);le.Loading.custom("Loading...",{customSvgCode:'<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',backgroundColor:"rgba(0, 0, 0, 0.8)"}),le.Loading.remove(2e3);window.filmoteka=new(0,o.Filmoteka),window.fireBase=new(0,c.FireBaseData),window.movieLibrary=new(0,l.MovieLibrary),window.filterHendler=new v,window.modal=new(0,M.Modal),window.loader=function(){S.Loading.custom("Loading...",{customSvgCode:'<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',backgroundColor:"rgba(0, 0, 0, 0.8)"})},r.refs.login.addEventListener("click",(function(e){window.fireBase.login()})),document.querySelector(".slider__track")&&document.querySelector(".slider__track").addEventListener("click",(function(e){})),window.addEventListener("scroll",f.hidenButton),document.querySelector(".btn-up").addEventListener("click",f.upClick),(0,s.setLagnuage)(),document.querySelector(".translate").addEventListener("click",(function(){(0,s.changeLagnuage)(),window.movieLibrary.updateLang(),location.reload()})),(0,u.setColor)(),r.refs.colorSelector.addEventListener("click",u.changeColor),k(),document.querySelector("#rating-filter").addEventListener("change",window.filterHendler.ratingFilterOnChenge),document.querySelector("#date-filter").addEventListener("change",window.filterHendler.dataFilterOnChange),function(){N.apply(this,arguments)}()}();
//# sourceMappingURL=index.c37238f5.js.map
