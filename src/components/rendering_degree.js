import weatherApi from '../components/weather_api_service.js';
//vh
import { error } from '@pnotify/core';

export const degree = document.querySelector('.vh_degree_container');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const input = searchForm.elements.city;
  const inputValue = input.value;

  weatherApi.fetchCurrentWeatherByCity(inputValue).then(data => {
    if (data.cod === '404') {
      error({
        title: 'Uh Oh!',
        text: data.message,
        hide: true,
        delay: 2000,
      });
    }
    //====
    degree.innerHTML = renderDegree(data);
  });
});

// -----------по гео или дефолту-------------------------------------
navigator.geolocation.getCurrentPosition(
  function (pos) {
    weatherApi
      .fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
      .then(data => {
        console.log(data);
        degree.innerHTML = renderDegree(data);
      });
  },
  function () {
    const city = 'Kiev';
    weatherApi.fetchCurrentWeatherByCity(city).then(data => {
      console.log(data);
      degree.innerHTML = renderDegree(data);
    });
  },
);

export const renderDegree = function (data) {
  return `<div class="vh_degree_weather_icon">
  <img src="https://openweathermap.org/img/w/${
    data.weather[0].icon
  }.png" alt=""></div>
  <div class="vh_degree_city">${data.name}, ${data.sys.country}</div>
  <div class="vh_degree_tmp">${Math.round(data.main.temp)}°</div>
  <div class="vh_min_max_label">
    <span>min</span>
    <span>max</span>
  </div>
  <div class="vh_min_max_item">
  <span>${Math.round(data.main.temp_min)}°</span>
  <span>${Math.round(data.main.temp_max)}°</span>
</div>

  `;
};
