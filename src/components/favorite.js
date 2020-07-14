const { data } = require("autoprefixer");
import defaultModules from '@pnotify/core'
import PNotify from '@pnotify/core/dist/PNotify'
import '@pnotify/core/dist/BrightTheme.css'
import '@pnotify/core/dist/Pnotify.css'

$('.favorite__slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    infinite: false
})

const btn = document.querySelector('.d_right_icon');
const dataInput = document.querySelector('.d_input');

localStorage.removeItem('City')

let state = [];

const getStoreCities = () => {
    state = JSON.parse(localStorage.getItem('city'))
    console.log(state)
    state.map(city => {
        $('.favorite__slider').slick('slickAdd',
            `
            <div class="item">
                <div class="city">
                    <button class="delete-city"></button>
                    <span class="city-text" data-city="${city}">${city}</span>
                </div>  
            </div>
            `
        );
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getStoreCities();
})

/* defaultModules.set(PNotify, {}); */

btn.addEventListener('click', () => {
    let cities = JSON.parse(localStorage.getItem('city'))
    if(!cities.includes(dataInput.value) && cities !== ''){
        state.push(dataInput.value);
        localStorage.setItem('city', JSON.stringify(state));
        $('.favorite__slider').slick('slickAdd',
            `
            <div class="item">
                <div class="city">
                    <button class="delete-city"></button>
                    <span class="city-text" data-city="${dataInput.value}">${dataInput.value}</span>
                </div>  
            </div>
            `
        );
    }else{
        alert(`${dataInput.value} is already on your favorite list`)
        /* PNotify.error({
            title: 'Oh No!',
            text: 'Something terrible happened.'
        }); */
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-city')){
        const cityName = e.target.parentNode.childNodes[3].getAttribute('data-city');
        state.filter(city => city !== cityName)
        localStorage.setItem('city', JSON.stringify(state));
        getStoreCities();
    }
})
