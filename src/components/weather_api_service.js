'use strict';

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const key = 'ef09053ba5c2f49c031def93624f1f41';
const curentWeather = 'weather?';
const forcast = 'forecast?';

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

export default {
  lat: '50.461944599999995',
  lon: '30.335979699999996',
  //   lat: '',
  //   lon: '',
  //   query: '',
  query: 'Kyiv',
  fetchCurrentWeatherByCoord(lat, lon) {
    const requestParams = `lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    return fetch(baseUrl + curentWeather + requestParams)
      .then(response => response.json())

      .catch(error => {
        console.log(error);
      });
  },

  fetchCurrentWeatherByCity() {
    const requestParams = `q=${this.query}&appid=${key}&units=metric`;
    return fetch(baseUrl + curentWeather + requestParams)
      .then(response => response.json())

      .catch(error => {
        console.log(error);
      });
  },

  fetchWeatherForecastByCoord() {
    const requestParams = `lat=${this.lat}&lon=${this.lon}&appid=${key}&units=metric`;
    return fetch(baseUrl + forcast + requestParams)
      .then(response => response.json())

      .catch(error => {
        console.log(error);
      });
  },

  fetchWeatherForecastByCity() {
    const requestParams = `q=${this.query}&appid=${key}&units=metric`;
    return fetch(baseUrl + forcast + requestParams)
      .then(response => response.json())

      .catch(error => {
        console.log(error);
      });
  },

  get searchQuerry() {
    return this.query;
  },

  set searchQuerry(string) {
    this.query = string;
  },

  get cityLatitude() {
    return this.lat;
  },

  set cityLatitude(string) {
    this.lat = string;
  },
  get cityLongitude() {
    return this.lon;
  },

  set cityLongitude(string) {
    this.lon = string;
  },
};
