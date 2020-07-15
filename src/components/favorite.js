const { data } = require('autoprefixer');
import weatherApi from './weather_api_service';
import { header } from './makeHeaders';
import { renderDegree, degree } from './rendering_degree';
import imgArr from '../components/imageApiService.js';
import { bck, randomIntegerFromInterval } from './makeBackground';
/* import defaultModules from '@pnotify/core'
import PNotify from '@pnotify/core/dist/PNotify'
import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/Pnotify.css' */

$('.favorite__slider').slick({
  slidesToShow: 4,
  variableWidth: true,
  infinite: false,
});

const btn = document.querySelector('.d_right_icon');
const dataInput = document.querySelector('.d_input');

localStorage.removeItem('City');

let state = [];

const getStoreCities = () => {
  state = JSON.parse(localStorage.getItem('city'));
  console.log(state);
  state.map(city => {
    $('.favorite__slider').slick(
      'slickAdd',
      `
        <div class="item">
            <div class="city">
                <button class="delete-city"></button>
                <span class="city-text" data-city="${city}">${city}</span>
            </div>  
        </div>
        `,
    );
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getStoreCities();
});

/* defaultModules.set(PNotify, {}); */

btn.addEventListener('click', () => {
  let cities = JSON.parse(localStorage.getItem('city'));
  if (!cities.includes(dataInput.value) && cities !== '') {
    state.push(dataInput.value);
    localStorage.setItem('city', JSON.stringify(state));
    $('.favorite__slider').slick(
      'slickAdd',
      `
            <div class="item">
                <div class="city">
                    <button class="delete-city"></button>
                    <span class="city-text" data-city="${dataInput.value}">${dataInput.value}</span>
                </div>  
            </div>
            `,
    );
  } else {
    alert(`${dataInput.value} is already on your favorite list`);
    /* PNotify.error({
            title: 'Oh No!',
            text: 'Something terrible happened.'
        }); */
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('delete-city')) {
    const cityName = e.target.parentNode.childNodes[3].getAttribute(
      'data-city',
    );
    e.target.parentNode.remove();
    state = state.filter(city => city !== cityName);
    localStorage.setItem('city', JSON.stringify(state));
  } else if (e.target.classList.contains('city-text')) {
    const cityName = e.target.parentNode.childNodes[3].getAttribute(
      'data-city',
    );
    weatherApi.fetchCurrentWeatherByCity(cityName).then(data => {
      console.log(data);
      header.innerHTML = renderHeader(data);
      degree.innerHTML = renderDegree(data);
    });
    imgArr.fetchImagesByCity(cityName).then(data => {
      console.log(data);
      const number = randomIntegerFromInterval(0, 3);

      bck.style.backgroundImage = `url(${data.hits[number].largeImageURL})`;
    });
  }
});

const renderHeader = function (data) {
  return `${data.name}, ${data.sys.country}`;
};
