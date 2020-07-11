'use strict';
import getGeolocation from '../components/geolocation';

// import slick from './slick.min.js';

const inputText = document.querySelector('#d_search');
const favourite = document.querySelector('.d_star-icon');

$(document).ready(function () {
  $('.d_layout').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: null,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// $('.d_star-icon').click(function (event) {
//   $('d_layout').slick(
//     'slickAdd',
//     `<div class="d_slider-item">
//   <a href="#" class="d_slider-link">(`${inputText.value}`)</a>
//   <a href="#" role="button" class="d_close-icon"
//     ><svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="24"
//       viewBox="0 0 24 24"
//       width="24"
//     >
//       <path
//         d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//       />
//       <path d="M0 0h24v24H0z" fill="none" />
//     </svg>
//   </a>
// </div>`,
//   );
//   return false;
// });
// $('d_close-icon').on('click', function (event) {
//   $('.d_layout').slick('slickRemove', slideIndex - 1);
//   if (slideIndex !== 0) {
//     slideIndex--;
//   }
// });

// //---------------If I use Vue.js---------------------
// Vue.component('slider', {
//   template: `
// <div>
// <div v-for="slide in slides" class="d_slider-item">
//           <a href="#" class="d_slider-link">{{ slide }}</a>
//           <a href="#" role="button" class="d_close-icon"
//             ><svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="24"
//               viewBox="0 0 24 24"
//               width="24"
//             >
//               <path
//                 d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//               />
//               <path d="M0 0h24v24H0z" fill="none" />
//             </svg>
//           </a>
//         </div>
//  `,
//   props: ['slides'],
//   data() {
//     return {
//       sliderOptions: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         prevArrow: null,
//         variableWidth: true,
//         mobileFirst: true,
//         responsive: [
//           {
//             breakpoint: 767,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       },
//     };
//   },
//   methods: {
//     initSlider() {
//       $(this.$el).slick(this.sliderOptions);
//     },
//     destroySlider() {
//       $(this.$el).slick('unslick');
//     },
//   },
//   mounted() {
//     this.initSlider();
//   },
//   watch: {
//     slides() {
//       this.destroySlider();
//       Vue.nextTick(() => {
//         this.initSlider();
//       });
//     },
//   },
// });

// /*--------------------------------------
// App
// --------------------------------------*/
// const app = new Vue({
//   el: '#app',
//   data: {
//     words: ['Kyiv', 'Paris'],
//     newItem: '',
//   },
//   methods: {
//     addItem(item) {
//       this.words.unshift(item);
//       this.newItem = '';
//     },
//   },
// });
