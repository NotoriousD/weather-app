import moment from 'moment';
import Chart from 'chart.js';

import weatherApi from './weather_api_service';





const myChart = document.querySelector(".pm_chart_container");

weatherApi.fetchWeatherForecastByCoord().then(data => {

  const daysOfWeek = [];
  const temperatures = [];
  const humidity = [];
  const wind = [];
  const pressure = [];
  for (let i = 0; i < data.list.length; i = i + 8) {

    daysOfWeek.push(getMonthDay(data.list[i].dt))
    temperatures.push(data.list[i].main.temp)
    humidity.push(data.list[i].main.humidity)
    wind.push(data.list[i].wind.speed)
    pressure.push(data.list[i].main.pressure)
  }



  new Chart(document.getElementById("myChart"), {
    type: 'line',
    backgroundColor: 'rgb(255, 99, 132)',
    data: {
      labels: [...daysOfWeek],
      datasets: [{
          data: [...temperatures],
          label: 'Temperature, C°',
          borderColor: 'orange',
          fill: false,
        },
        {
          data: [...humidity],
          label: 'Humidity, %',
          borderColor: 'blue',
          fill: false,
        },
        {
          data: [...wind],
          label: 'Wind Speed, m/s',
          borderColor: 'yellow',
          fill: false,
        },
        {
          data: [...pressure],
          label: 'Atmosphere Pressure, m/m',
          borderColor: 'green',
          fill: false,
        },
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });



})



const showChart = document.querySelector('.show-charts')
showChart.addEventListener('click', () => {

  myChart.classList.toggle('pm_is_hidden')

})


function getWeekDay(number) {
  const a = new Date(number * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[a.getDay()]
  return dayOfWeek
}

function getMonthDay(number) {
  const a = new Date(number * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[a.getMonth()];
  const day = a.getDate();
  const year = a.getFullYear();
  const validFormat = `${day} ${month},${year}`;
  return validFormat;
}

function getDayNumber(number) {
  const a = new Date(number * 1000);
  const day = a.getDate();
  return day;
}
