import './styles.css';
import './css/fiveday.scss';
import './media.css';
import './css/page.scss';
import './css/dariaK/inputAndSlider.scss';
import './components/5dayModule';
import './components/5dayHeading'
import './components/chart';/* 
import './components/searchAndSlider.js';
import './components/api'; */
import './components/pixabay_api_service';
import './components/inputSearch';
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree';
import './components/display_quotes';
import {queryLayoutOneDay, startOneDayLayout} from './components/rendering_degree'
import PNotify from '../node_modules/@pnotify/core/dist/PNotify'
import '../node_modules/@pnotify/core/dist/BrightTheme.css'

let store = {
  state: 'One'
}

const input = document.querySelector('#d_search');
const form = document.querySelector('#search-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  if (input.value === '') {
    PNotify.error({
      title: 'NOTICE!',
      text: 'Please write search city!',
    });
  }
  if(store.state === '')
  pixabayApi.fetchPictures().then(images => {
    const number = getRandomInt(3);
    document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
  });
  queryLayoutOneDay(input.value)
}

startOneDayLayout();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi.fetchPictures().then(images => {
  const number = getRandomInt(3);
  document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
});


