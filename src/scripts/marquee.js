// import { News } from "./fetch-news";


// var wrapper = document.querySelector('.marquee-wrapper'),
//     marquee = document.querySelector('.marquee'),   
//     wrapperWidth = wrapper.offsetWidth,
//     marqueeWidth = marquee.scrollWidth;
    
// // document.querySelector('button').onclick = function() {
// //   clearInterval(interval)
// // }
// const newsapi = new News;
// function move() {
//   var currentTX = getComputedStyle(marquee).transform.split(',');
//   if( currentTX[4] === undefined ) {
//     currentTX = -1;
//   } else {
//     currentTX = parseFloat(currentTX[4]) - 1;
//   }
  
//   if(-currentTX >= marqueeWidth) {
//     marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
//   } else {
//     marquee.style.transform = 'translateX(' + currentTX + 'px)';
//   }
// }

// var interval = setInterval(move, 40);
// // .marquee-wrapper {
// //   width: 300px;
// //   overflow: hidden;
// //   position: relative;
// // }

// // .marquee-wrapper:after {
// //   position: absolute;
// //   content: ' ';
// //   right: 0;
// //   top: 0;
// //   width: 50px;
// //   height: 100%;
// //   background-image: linear-gradient(to right, transparent, #fff);
// // }

// // .marquee {
// //   white-space: nowrap;
// // }
// {/* <div class="marquee-wrapper">
//   <p class="marquee"> бегущая строка при помощи Javascript </p>
// </div> */}

// /* <button>stop</button> */