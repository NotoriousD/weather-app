import imgArr from '../components/imageApiService.js';

const bck = document.querySelector('.content');
const searchForm = document.querySelector('#search-form');


searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = searchForm.elements.city;
  const inputValue = input.value;
  imgArr.query = inputValue;
  imgArr.fetchImages().then(data => {
    console.log(data)
    const number = randomIntegerFromInterval(0, 3)

    bck.style.backgroundImage = `url(${data.hits[number].largeImageURL})`;


  })


})



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
