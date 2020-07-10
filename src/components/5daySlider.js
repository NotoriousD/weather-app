$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  mobileFirst: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 328,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
    },


    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// // $('.js-five-days').slick({
// //   dots: false,
// //   infinite: false,
// //   speed: 300,
// //   mobileFirst: true,
// //   slidesToShow: 3,
// //   slidesToScroll: 1,
// //   responsive: [{
// //       breakpoint: 1024,
// //       settings: {
// //         slidesToShow: 6,
// //         slidesToScroll: 1,
// //         infinite: true,
// //         dots: true
// //       }
// //     },
// //     {
// //       breakpoint: 768,
// //       settings: {
// //         slidesToShow: 3,
// //         slidesToScroll: 1
// //       }
// //     },
// //     {
// //       breakpoint: 320,
// //       settings: {
// //         slidesToShow: 3,
// //         slidesToScroll: 1
// //       }
// //     }
// //     // You can unslick at a given breakpoint now by adding:
// //     // settings: "unslick"
// //     // instead of a settings object
// //   ]
// // });
