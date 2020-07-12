import './styles.css';
import './css/fiveday.scss';
import './media.css';
import './css/page.scss';
// import './css/dariaK/inputAndSlider.scss';
import './components/5dayModule';
// import './components/5dayHeading';
import './components/chart';
// import './components/searchAndSlider.js';
import './components/api';
import './components/pixabay_api_service';
import query from './components/weather_api_service';
import './components/inputSearch';
// import favCityTemplate from './templates/favListItem.hbs';
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree';
import './components/display_quotes';
import Siema from 'siema';
import {
  queryLayoutOneDay,
  startOneDayLayout,
} from './components/rendering_degree';
import debounce from 'lodash.debounce';
/* import PNotify from '../node_modules/@pnotify/core/dist/PNotify';
import '../node_modules/@pnotify/core/dist/BrightTheme.css'; */

let store = {
  state: 'One',
};

const refs = {
  input: document.querySelector('.d_search-box'),
  starBtn: document.querySelector('.d_star-icon'),
  cityContainer: document.querySelector('.d_siema'),
  deleteBtn: document.querySelector('.d_close-btn'),
  form: document.querySelector('#search-form'),
};

refs.form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  /* if (input.value === '') {
    PNotify.error({
      title: 'NOTICE!',
      text: 'Please write search city!',
    });
  } */
  pixabayApi.fetchPictures().then(images => {
    const number = getRandomInt(3);
    document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
  });
  queryLayoutOneDay(refs.input.value);
}

startOneDayLayout();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi.fetchPictures().then(images => {
  const number = getRandomInt(3);
  document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
});
