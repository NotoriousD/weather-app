'use strict';

import imgService from './pixabay_api_service.js';

function BackgroundImg(city) {
  if (city) {
    city = `city + ${city.name}`;
    const response = imgService(city);
    if (response.hits.length) {
      document.querySelector('body').style.backgroundImage = `url(${
        response.hits[getRandomArbitrary(0, response.hits.length)].largeImageURL
      })`;
    }
  }
}
