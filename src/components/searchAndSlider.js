// 'use strict';
// import Siema from 'siema';

// const refs = {
//   input: document.querySelector('.d_search-box'),
//   starBtn: document.querySelector('.d_star-icon'),
//   cityContainer: document.querySelector('.d_siema'),
//   deleteBtn: document.querySelector('.d_close-btn'),
// };

// const citiesFromStorage = JSON.parse(localStorage.getItem('City'));
// const savedCities = [];

// if (citiesFromStorage === null) {
//   const allItems = savedCities
//     .map(
//       city => `<div id=${city} class="d_btn-container">
//         <span class="d_added-city">${city}</span>
//         <button class="d_close-btn" data-id=${city}></button>
//         </div>`,
//     )
//     .join('');
//   refs.cityContainer.innerHTML = allItems;
// } else {
//   const allItems = citiesFromStorage
//     .map(
//       city => `<div id=${city} class="d_btn-container"><span class="d_added-city">${city}</span><button class="d_close-btn"
//         data-id=${city}></button>
//       </div>`,
//     )
//     .join('');
//   refs.cityContainer.innerHTML = allItems;
// }

// let citiesMemList = null;
// refs.input.addEventListener('input', debounce(searchFromInput, 1000));
// refs.starBtn.addEventListener('click', insertCityToTheMem);
// document.addEventListener('click', deleteCityFromMem);

// function searchFromInput(e) {
//   let city = e.target.value;

//   query
//     .fetchWeatherForecastByCity(city)
//     .then(data => {
//       let keys = Object.values(data.sys.country).join('');

//       if (data.cod === 200 && !citiesFromStorage(data.name)) {
//         refs.starBtn.classList.remove('d_full-star');
//         pixabayApi.searchQuerry = data.name;

//         citiesMemList = {
//           name: data.name,
//           html: memoryBuilder(data),
//         };
//       } else {
//         citiesMemList = null;
//       }
//     })
//     .catch(err => {
//       const myErr = error({
//         delay: 2000,
//         text: 'Sorry! We can`t find your reqest.',
//       });
//     });
// }
// function insertCityToTheMem() {
//   refs.starBtn.classList.add('d_full-star');
//   let { value } = refs.input;

//   if (!value || savedCities.includes(value)) {
//     return;
//   }
//   refs.input.value = '';

//   savedCities.push(value);

//   const allItems = savedCities
//     .map(
//       city => `<div id=${city} class="d_btn-container">
//         <span class="d_added-city">${city}</span>
//         <button class="d_close-btn" data-id=${city}></button>
//         </div>`,
//     )
//     .join('');

//   refs.cityContainer.innerHTML = allItems;

//   // LOCAL STORAGE
//   localStorage.setItem('City', JSON.stringify(savedCities));

//   const mySiema = new Siema({
//     perPage: citiesFromStorage.length > 3 ? 3 : citiesFromStorage.length,
//     multipleDrag: true,
//     selector: '.siema',
//     easing: 'ease-out',
//     draggable: true,
//     duration: 200,
//     threshold: 20,
//     startIndex: 0,
//     loop: true,
//     rtl: false,
//     onInit: () => {},
//     onChange: () => {},
//   });

//   document
//     .querySelector('.d_right-btn')
//     .addEventListener('click', () => mySiema.next());
// }

// function deleteCityFromMem(e) {
//   if (e.target && e.target.className === 'd_close-btn') {
//     let id = e.target.dataset.id;
//     document.getElementById(id).remove();
//     savedCities.splice(savedCities.indexOf(id), 1);

//     const cutItem = citiesFromStorage.splice(citiesFromStorage.indexOf(id), 1);
//     localStorage.setItem('City', JSON.stringify(cutItem));
//     if ((citiesFromStorage.length = 1)) {
//       localStorage.clear();
//     }
//   }
// }
