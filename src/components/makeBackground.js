import imgArr from '../components/imageApiService.js';

export const bck = document.querySelector('.content');
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('.d_input');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = input.value;
  imgArr.query = inputValue;
  imgArr.fetchImages().then(data => {
    console.log(data);
    const number = randomIntegerFromInterval(0, 3);

    bck.style.backgroundImage = `url(${data.hits[number].largeImageURL})`;
  });
});

export const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
