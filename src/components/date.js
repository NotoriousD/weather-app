import weatherApi from '../components/weather_api_service.js';


const dateContainer = document.querySelector('.vh_date_container')

navigator.geolocation.getCurrentPosition(function (pos) {
  weatherApi.fetchCurrentWeatherByCoord(pos.coords.latitude, pos.coords.longitude)
    .then(data => {
      dateContainer.innerHTML = renderDateModule(data)
    });
}, function () {
  const city = "Kiev"
  weatherApi.fetchCurrentWeatherByCity(city).then(data => {
    dateContainer.innerHTML = renderDateModule(data)
  })
});




const renderDateModule = function (data) {

  return `
<div class="vh_date_block">
    <div class="vh_date"><div> ${getDayNumber()}<sup>th</sup> ${getWeekDay()}</div></div>
    <div class="vh_clocks_block">
        <div class="vh_clock_month_container">
            <span>${getMonth()}</span>
            <span id="clock"></span>
        </div>
        <div class="vh_sunset_container">
            <div class="sunrise"><img src="https://i.ibb.co/X2Xp5Mp/sunrise.png" alt=""> <span class="sunrise_border"> ${getSunset(data.sys.sunrise)}</span></div>
            <div class="sunrise"><img src="https://i.ibb.co/fp64SZM/sunset.png" alt=""> <span> ${getSunset(data.sys.sunset)}</span></div>
        </div>
    </div>
</div>

`

}




function getWeekDay() {
  const a = new Date();
  const days = [
    'Sun',
    'Mony',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  const dayOfWeek = days[a.getDay()];
  return dayOfWeek;
}


function getDayNumber() {
  const a = new Date();
  const day = a.getDate();
  return day;
}


function getMonth() {
  const a = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[a.getMonth()];

  return month;
}

function getSunset(number) {
  let date = new Date(number * 1000);
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  return hours + ':' + minutes;
}

function getTime() {
  var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(getTime, 1000);
