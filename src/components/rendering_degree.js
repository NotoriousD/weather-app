'use strict';

import weatherFetch from '../components/weather_api_service.js';
import {
  Handlebars
} from 'handlebars';

weatherFetch.fetchCurrentWeatherByCity().then(weather => {
  console.log('myweather', weather);
  const markup = buildItemMarkup(weather); //в data.countries обьект с данными которые вернулись с бекэнда
  insertListItem(markup); //вызываем ф-цию для отрисовки
});
// console.log('dateWeather', dateWeather);

import tamplate_degree from '../templates/degree.hbs'; //шаблон в который будут вставляться данные для формирования разметки

const weatherDegree = document.querySelector('.vh-weather');

//функция для заполнения данными разметки в шаблоне hbs для одной страны
function buildItemMarkup(item) {
  return tamplate_degree(item);
};

//функция для вставки отресованной разметки в html
function insertListItem(items) {
  weatherDegree.insertAdjacentHTML('afterbegin', items); //items = markup
}
