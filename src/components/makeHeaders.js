import weatherApi from './weather_api_service';

export const header = document.querySelector('.js-heading');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = searchForm.elements.city;
  const inputValue = input.value;
  weatherApi.searchQuerry = inputValue;
  weatherApi.fetchWeatherForecastByCity().then(data => {
    console.log(data);
    header.innerHTML = renderHeader(data);
  });

  header.classList.remove('is_hidden');
});

navigator.geolocation.getCurrentPosition(
  function (pos) {
    weatherApi
      .fetchWeatherForecastByCoord(pos.coords.latitude, pos.coords.longitude)
      .then(data => {
        console.log(data);
        header.innerHTML = renderHeader(data);
      });
  },
  function () {
    const city = 'Kiev';
    weatherApi.fetchWeatherForecastByCoord(city).then(data => {
      console.log(data);
      header.innerHTML = renderHeader(data);
    });
  },
);

export const renderHeader = function (data) {
  return `${data.city.name}, ${data.city.country}`;
};
