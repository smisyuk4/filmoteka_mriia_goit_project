var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("1O3u4"),n=r("2mJPI"),i=r("8ENg6"),s=r("dPnIr"),d=r("d3vkx"),l=r("8NSUd"),f=r("6cLkv"),c=r("4NA3t"),w=r("eWCmQ");window.filmoteka=new(0,f.Filmoteka),window.fireBase=new(0,l.FireBaseData),window.movieLibrary=new(0,d.MovieLibrary),window.modal=new(0,c.Modal),window.loader=()=>{w.Loading.custom("Loading...",{customSvgCode:'<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><linearGradient id="myG"  fy="0" gradientTransform="rotate(60 .5 .5)"><stop offset="0" stop-color="#f15361"></stop><stop offset=".25" stop-color="#ffffff"><animate attributeName="offset" dur="2s" values="0;1;0"repeatCount="indefinite" /></stop><stop offset="1" stop-color="#f15361"/></linearGradient><path d="M0 0V12H16V0H0ZM3 11H1V9H3V11ZM3 7H1V5H3V7ZM3 3H1V1H3V3ZM12 11H4V1H12V11ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM15 3H13V1H15V3ZM6 3V9L10 6L6 3Z" fill="url(#myG)"/></svg>',backgroundColor:"rgba(0, 0, 0, 0.8)"})},window.addEventListener("scroll",i.hidenButton),document.querySelector(".btn-up").addEventListener("click",i.upClick),a.refs.headerButtons.addEventListener("click",(e=>{const t=e.target;"BUTTON"==t.nodeName&&("watched"==t.dataset.action&&(window.location.hash="",a.refs.container.innerHTML=window.movieLibrary.markupWatched(),a.refs.headerButtons.classList.add("watched")),"queue"==t.dataset.action&&(window.location.hash="queue",a.refs.container.innerHTML=window.movieLibrary.markupQueue(),a.refs.headerButtons.classList.remove("watched")))})),"#queue"==window.location.hash?(a.refs.headerButtons.classList.remove("watched"),a.refs.headerButtons.classList.remove("start")):(a.refs.headerButtons.classList.remove("start"),a.refs.headerButtons.classList.add("watched")),(0,n.setLagnuage)(),(0,s.setColor)(),window.modal.checkLibrary();
//# sourceMappingURL=library-pg.04e22c04.js.map