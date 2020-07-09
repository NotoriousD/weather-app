import fiveDayService from './apiService5days'
import fiveDaysHeader from '../templates/fiveDaysHeader.hbs'
import fiveDaysCard from '../templates/fiveDaysCard.hbs'


const fiveDayContainer = document.querySelector('.pm_fiveday_container')
const fiveDaysMain = document.querySelector('.pm_5day_main');

fiveDayService.getCity().then(data => {
  console.log(data)
  create5dayHeader(data)
})



function create5daysCards(data) {

  for (let i = 0; i < data.list.length; i = i + 8) {

    card = {}
    info.innerHTML += `
    <div class="pm_info_item">
        <div class="pm_day_week">${getWeekDay(data.list[i].dt)}</div>
        <div data-days="${getDayNumber(data.list[i].dt)}" class="pm_day_month">${getMonthDay(data.list[i].dt)}</div>
        <div class="pm_img_5days"><img src='https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png'></div>
        <div class="pm_temp_container">
            <div class="pm_temp"><span>min</span>${Math.round(data.list[i].main.temp_min)}°</div>
            <div class="pm_temp"><span>max</span>${Math.round(data.list[i].main.temp_max)}°</div>
        </div>
        <div data-counter="${index++}" id="pm_infoBtn" class="pm_more_info">more info</div>
    </div>`

  }

}


function create5dayHeader(data) {
  const markup = fiveDaysHeader(data.city);
  fiveDayContainer.innerHTML = markup;
}



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
  const validFormat = `${day} ${month}`;
  return validFormat;
}

function getDayNumber(number) {
  const a = new Date(number * 1000);
  const day = a.getDate();
  return day;
}
