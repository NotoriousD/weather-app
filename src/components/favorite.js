const { data } = require('autoprefixer');
import weatherApi from './weather_api_service';
import { header } from './makeHeaders';
import { renderDegree, degree } from './rendering_degree';
import imgArr from '../components/imageApiService.js';
import { bck, randomIntegerFromInterval } from './makeBackground';
import { error } from '@pnotify/core';

$('.favorite__slider').slick({
  slidesToShow: 4,
  variableWidth: true,
  infinite: false,
});

const btn = document.querySelector('.d_right_icon');
const dataInput = document.querySelector('.d_input');

let state = [];

const getStoreCities = () => {
  state = JSON.parse(localStorage.getItem('city'));
  if (state) {
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
  }else{
      state = []
  }
};

document.addEventListener('DOMContentLoaded', () => {
  getStoreCities();
});

btn.addEventListener('click', () => {
  let cities = JSON.parse(localStorage.getItem('city'));
  if(!cities){
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
  }else if (!cities.includes(dataInput.value) && cities !== '') {
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
    error({
      title: dataInput.value,
      text: `Is already on your favorite list`,
    });
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
