import {slider} from './slider'

const btn = document.querySelector('.d_star-icon');

let lcCity = [];

localStorage.setItem('cities', ['Kiev', 'Kharkiv'])

if(localStorage.getItem('cities').length !== 0){
    console.log(localStorage.getItem('cities'))
}

const change =  () => {}
