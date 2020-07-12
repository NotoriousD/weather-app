import weatherFetch from '../components/weather_api_service.js';
import {
  layoutDate
} from './date'

const startScreenContainer = document.querySelector('.dk-current-day');

export const queryLayoutOneDay = city => {
  weatherFetch.fetchCurrentWeatherByCity(city)

  .then(weather => {
    const info = buildInfoMarkup(weather);
    startScreenContainer.innerHTML = '';
    insertListItem(info);
  });

};


const onGetPositionSucess = pos => {
   weatherFetch.fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
   .then(weather => {
    const info = buildInfoMarkup(weather);
    insertListItem(info); //вызываем ф-цию для отрисовки
  });
};

const onGetPositionDefault = posDefault => {
  weatherFetch.fetchCurrentWeatherByCity('Kyiv')
  .then(weather => {
    const info = buildInfoMarkup(weather);
    insertListItem(info); //вызываем ф-цию для отрисовки
  });
};



export const startOneDayLayout = () => {
  navigator.geolocation.getCurrentPosition(onGetPositionSucess, onGetPositionDefault);
  // navigator.geolocation.getCurrentPosition(function (pos) {
  //   weatherFetch.fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
  //   .then(weather => {
  //     const info = buildInfoMarkup(weather);
  //     insertListItem(info); //вызываем ф-цию для отрисовки
  //   });
  // });
}

function buildInfoMarkup(item) {
  return layoutDate(item)
};

//функция для вставки отресованной разметки в html
function insertListItem(info) {
  startScreenContainer.insertAdjacentHTML('afterbegin', info);
}
