import moment from 'moment'
import imgSunrise from '../images/sunrise.svg'
import imgSunset from '../images/sunset.svg'

export const layoutDate = (data) => (
    `
    <div class="vh-oneday__container">
        <div class="vh-degree container vh-bg">
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}"
                width="42" class="vh-degree__img">
            <p class="vh-degree__country">${data.name}, ${data.sys.country}</p>
            <div class="vh-degree__temperatura">
                <p class="vh-temperatura-now">${data.main.temp}</p>
                <ul class="vh-temperatura-list vh-list">
                    <li class="vh-list__item vh-list__item-border">
                        <p class=" vh-item__name">min</p>
                        <p class="vh-item__temprt">${data.main.temp_min}</p>
                    </li>
                    <li class="vh-list__item">
                        <p class="vh-item__name">max</p>
                        <p class="vh-item__temprt">${data.main.temp_max}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="vh-button">
        <button class="vh-btns__today vh-btns">TODAY</button>
        <button class="vh-btns__fivedays vh-btns">5 DAYS</button>
    </div>
    <div class="vh-div__desktop">
        <div class="vh-data  vh-bg vh-data__bg">
            <div class="vh-data__date">
                <p class="vh-data__date-number vh-date__font">${moment(data.dt).format('DD')}</p>
                <p class="vh-data__date-day vh-date__font">${moment(data.dt).format('ddd')}</p>
            </div>

            <ul class="vh-data__date-list vh-list">
                <li class="vh-date__item vh-item__after">
                    <p>${moment(data.dt).format('MMMM')}</p>
                </li>
                <li class="vh-date__item vh-item__before">
                    <p>${moment(data.dt).format('hh:mm:ss')}</p>
                </li>
            </ul>

            <ul class="vh-data__sun-list vh-list">
                <li class="vh-sun__item ">
                    <img src="${imgSunrise}" alt="sunrise" width="25" height="33">
                    <p class="vh-item__after">${moment(data.sys.sunrise).format('hh:mm')}</p>
                </li>
                <li class="vh-sun__item vh-item__before">
                    <img src="${imgSunset}" alt="sunrise" width="25" height="33">
                    <p>${moment(data.sys.sunset).format('hh:mm')}</p>
                </li>
            </ul>
        </div>
        <div class="vh-quote container">
          <p class="vh-quote__text">Who cares about the clouds whn we're together? Just sing a song and bring the sunny
            weather.</p>
          <p class="vh-quote__author">Dale Evans</p>
        </div>
    </div>
    `
)