import headingFiveDays from '../templates/fiveDaysHeader.hbs';
import weatherApi from './weather_api_service';

const header = document.querySelector('.js-heading');

weatherApi.fetchWeatherForecastByCoord().then(data => {
  console.log(data)
  const markup = headingFiveDays(data.city);
  header.innerHTML = markup;
})
