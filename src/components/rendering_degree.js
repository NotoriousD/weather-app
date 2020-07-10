import weatherFetch from '../components/weather_api_service.js';
import {
  layoutDate
} from './date'

const startScreenContainer = document.querySelector('.dk__start-content');

navigator.geolocation.getCurrentPosition(function (pos) {
  weatherFetch.fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
  .then(weather => {
    console.log('weather',weather);
    const info = buildInfoMarkup(weather);
    insertListItem(info); //вызываем ф-цию для отрисовки
  });
});

function buildInfoMarkup(item) {
  return layoutDate(item)
};

//функция для вставки отресованной разметки в html
function insertListItem(info) {
  startScreenContainer.insertAdjacentHTML('afterbegin', info);
}
