const e={test:"test ref",testLibrary:"test library",libP:document.querySelector("#lib"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchBtn:document.querySelector(".search-btn"),modalOffer:document.querySelector(".input-offer__list"),massages:document.querySelector(".search-form__error"),container:document.querySelector("[data-film-table-list]"),modalOverlay:document.querySelector(".modal-film__card-overlay"),containerModal:document.querySelector("[data-modal-content]"),colorSelector:document.querySelector(".color--input"),login:document.querySelector(".login-btn")},t={chengeLang:"en",lang:"ua-UA",loadFirst:!0,hello:"Привіт",buttonWatched:"Дивився",buttonQueue:" Черга",homeLink:"Головна",myLibraryLink:"Моя бібліотека",searchForm:"Результат пошуку невдалий. Введіть правильну назву фільму та спробуйте знову",login:"Вхід",about:"Про",vote:"Голос / Голосів",popularity:"Популярність",title:"Оригінальна назва",genre:"Жанр",searchInput:"пошук фільму",ratingFilter:"Рейтинг",yearsFilter:"Рік",nextCat:"Наст",prevCat:"Попр"},o={chengeLang:"ua",lang:"en-EN",hello:"Hello",buttonWatched:"Watched",buttonQueue:"Queue",homeLink:"HOME",myLibraryLink:"my library",searchForm:"Search result not successful. Enter the correct movie name and try again",login:"Login",about:"About",vote:"Vote / Votes",popularity:"Popularity",title:"Original Title",genre:"Genre",searchInput:"movie search",ratingFilter:"Rating",yearsFilter:"Years",nextCat:"next",prevCat:"prev"},r=document.querySelector(".translate"),l=document.querySelector(".search-form__input");function n(){null===localStorage.getItem("siteOptions")&&localStorage.setItem("siteOptions","eng");const e=localStorage.getItem("siteOptions");let n;null!==l&&("eng"===e&&(n=o,r.value="eng"),"ua"===e&&(r.checked=!0,r.value="ua",n=t)),document.querySelectorAll("[data-text]").forEach((e=>{e.innerHTML=n[e.dataset.text]})),null!==l&&(l.placeholder=n.searchInput)}console.log(r);const c=document.querySelector(".btn-up");const a=document.querySelector(".color--input");function u(){const e=localStorage.getItem("theme");if(console.log(a),"dark-color"===e)return a.checked=!0,a.value="dark",void(document.documentElement.classList="dark-color");document.documentElement.classList="light-color",a.value="light"}window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?c.classList.remove("btn-up_hide"):c.classList.add("btn-up_hide")})),document.querySelector(".btn-up").addEventListener("click",(function(){window.scrollTo(pageYOffset,0)})),n(),document.querySelector(".translate").addEventListener("click",(function(){r.checked?(r.value="ua",localStorage.setItem("siteOptions","ua")):(r.value="eng",localStorage.setItem("siteOptions","eng")),n()})),u(),e.colorSelector.addEventListener("click",(function(){e.colorSelector.checked?(a.value="dark",localStorage.setItem("theme","dark-color")):(a.value="light",localStorage.setItem("theme","light-color")),u()}));
//# sourceMappingURL=library-pg.c67917d9.js.map
