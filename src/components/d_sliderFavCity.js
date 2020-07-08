// 'use strict';

// const multiItemSlider = (function () {
//   return function (selector, config) {
//     var mainElement = document.querySelector(selector),
//       sliderContainer = mainElement.querySelector('#d_slider-container'),
//       sliderItem = mainElement.querySelector('.d_slider-item'),
//       sliderControls = mainElement.querySelector('.d_slider-control'),
//       sliderControlLeft = mainElement.querySelector('.d_slider-control-left'),
//       sliderControlRight = mainElement.querySelector('.d_slider-control-right'),
//       containerWidth = parseFloat(getComputedStyle(sliderContainer).width),
//       itemWidth = parseFloat(getComputedStyle(sliderItem[0]).width),
//       positionLeftItem = 0,
//       transform = 0, // significance of transfromation .slider-container
//       step = (itemWidth / containerWidth) * 100,
//       items = [];

//     //array filling items
//     sliderItem.forEach(function (item, index) {
//       items.push({ item: item, position: index, transform: 0 });
//     });

//     const position = {
//       getMin: 0,
//       getMax: items.length - 1,
//     };

//     transformItem = function (direction) {
//       if (direction === 'right') {
//         if (
//           positionLeftItem + containerWidth / itemWidth - 1 >=
//           position.getMax
//         ) {
//           return;
//         }
//         if (!sliderControlLeft.classList.contains('d_slider-control-show')) {
//           sliderControlLeft.classList.add('d_slider-control-show');
//         }
//         if (
//           sliderControlRight.classList.contains('d_slider-control-show') &&
//           positionLeftItem + containerWidth / itemWidth >= position.getMax
//         ) {
//           sliderControlRight.classList.remove('d_slider-control-show');
//         }
//         positionLeftItem++;
//         transform -= step;
//       }
//       if (direction === 'left') {
//         if (positionLeftItem <= position.getMin) {
//           return;
//         }
//         if (!sliderControlRight.classList.contains('d_slider-control-show')) {
//           sliderControlRight.classList.add('d_slider-control-show');
//         }
//         if (
//           sliderControlLeft.classList.contains('d_slider-control-show') &&
//           positionLeftItem - 1 <= position.getMin
//         ) {
//           sliderControlLeft.classList.remove('d_slider-control-show');
//         }
//         positionLeftItem--;
//         transform += step;
//       }
//       sliderContainer.style.transform = 'translateX(' + transform + '%)';
//     };

//     controlClick = function (e) {
//       if (e.target.classList.contains('slider-control')) {
//         e.preventDefault();
//         const direction = e.target.classList.contains('d_slider-control-right')
//           ? 'right'
//           : 'left';
//         transformItem(direction);
//       }
//     };
//     const setUpListeners = function () {
//       sliderControls.forEach(function (item) {
//         item.addEventListener('click', controlClick);
//       });
//     };

//     setUpListeners();
//     return {
//       right: function () {
//         transformItem('right');
//       },
//       left: function () {
//         transformItem('left');
//       },
//     };
//   };
// })();
// const slider = multiItemSlider('.d_layout');
