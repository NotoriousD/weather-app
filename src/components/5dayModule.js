import weatherApi from './weather_api_service';



const moreInfo = document.querySelector('.pm_5day_more_info');
const daysContainer = document.querySelector('.js-five-days');


weatherApi.fetchWeatherForecastByCoord().then(data => {
  const list = data.list;

  for (let i = 0; i < list.length; i = i + 8) {
    daysContainer.innerHTML += `
              <li class="pm_info_item">
                  <div class="pm_day_week">${getWeekDay(data.list[i].dt)}</div>
                  <div data-days="${getDayNumber(data.list[i].dt)}" class="pm_day_month">${getMonthDay(data.list[i].dt)}</div>
                  <div class="pm_img_5days"><img src='https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png'></div>
                  <div class="pm_min_max_label">
                      <span>min</span>
                      <span>max</span>
                  </div>
                  <div class="pm_min_max_item">
                      <span>${Math.round(data.list[i].main.temp_min)}°</span>
                      <span>${Math.round(data.list[i].main.temp_max)}°</span>
                  </div>

                  <div id="pm_infoBtn" class="pm_more_info">more info</div>
              </li>`

  }


  const infoBtn = document.querySelectorAll('#pm_infoBtn');
  const daysOfWeek = document.querySelectorAll('.pm_day_month');


  for (let i = 0; i < infoBtn.length; i++) {
    infoBtn[i].addEventListener("click", (event) => {
      console.log(event.target)
      moreInfo.innerHTML = '';
      moreInfo.innerHTML = '<button class="pm_close_btn">&#215;</button>'
      moreInfo.classList.add('pm_is_active')


      list.forEach(item => {

        let unix_timestamp = item.dt
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        const dayz = date.getDate();

        if (dayz != daysOfWeek[i].dataset.days) {
          return
        } else {
          moreInfo.insertAdjacentHTML(
            "beforeend",
            `<li class="pm_card_container">
                                  <div class="pm_card_date">${formattedTime}</div>
                                  <div class="pm_card_icon"><img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt=""></div>
                                  <div class="pm_card_tmp">${Math.round(item.main.temp)}°</div>
                                  <div class="pm_card_grd_lvl"><img src="https://i.ibb.co/wJ0mfSh/wez1.png" alt="">${item.main.grnd_level} mm</div>
                                  <div class="pm_card_hum"><img src="https://i.ibb.co/tDyKvnT/wez2.png" alt="">${item.main.humidity}%</div>
                                  <div class="pm_card_wind"><img src="https://i.ibb.co/2nRWq6x/wez3.png" alt="">${item.wind.speed} m/s</div>
                            </li>`
          )
        }
      })
      document.querySelector('.pm_close_btn').addEventListener('click', () => {
        moreInfo.classList.remove('pm_is_active')
      })

    })
  }
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
  const validFormat = `${day} ${month}`;
  return validFormat;
}

function getDayNumber(number) {
  const a = new Date(number * 1000);
  const day = a.getDate();
  return day;
}

const prevArrow = document.querySelector('.FiveDaysSmall__navBtn--left');
const nextArrow = document.querySelector('.FiveDaysSmall__navBtn--right');
let currentStep = 0;

nextArrow.addEventListener('click', handlerNextHour);
prevArrow.addEventListener('click', handlerPrevHour);

function handlerNextHour(event) {
  if (currentStep >= 2) {
    return
  }
  currentStep++;
  setPositionRight();
}

function handlerPrevHour(event) {
  if (currentStep <= 0) {
    return
  }
  currentStep--;
  setPositionLeft();
}

function setPositionRight() {
  daysContainer.style.transform += `translateX(-84px)`;
  daysContainer.style.transitionDuration = '500ms';
}

function setPositionLeft() {
  daysContainer.style.transform += `translateX(84px)`;
  daysContainer.style.transitionDuration = '500ms';
}
