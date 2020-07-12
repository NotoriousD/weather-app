import weatherFetch from '../components/weather_api_service.js';
import {
  layoutDate
} from './date'

const startScreenContainer = document.querySelector('.dk__start-content');


const onGetPositionSucess = pos => {
  weatherFetch.fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
  .then(weather => {
    const info = buildInfoMarkup(weather);
    insertListItem(info); //вызываем ф-цию для отрисовки
  });
};

const onGetPositionDefault = posDefault => {
  weatherFetch.fetchCurrentWeatherByCity()
  .then(weather => {
    const info = buildInfoMarkup(weather);
    insertListItem(info); //вызываем ф-цию для отрисовки
  });
};

navigator.geolocation.getCurrentPosition(onGetPositionSucess, onGetPositionDefault);

function buildInfoMarkup(item) {
  return layoutDate(item)
};

//функция для вставки отресованной разметки в html
function insertListItem(info) {
  startScreenContainer.insertAdjacentHTML('afterbegin', info);
}
