import { getGeolocation } from './geolocation.js';
import weatherFetch from './weather_api_service.js';
import imgService from './pixabay_api_service.js';

const locationBtn = document.querySelector('.js-location');
locationBtn.addEventListener('click', getGeolocation());

const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;
  const inputValue = input.value;

  weatherFetch.searchQuerry = inputValue;
  imgService.searchQuerry = inputValue;
});
