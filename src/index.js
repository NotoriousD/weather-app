import './styles.css';
import './css/fiveday.scss';
import './media.css';
import './css/page.scss';
// import './css/dariaK/inputAndSlider.scss';
import './components/5dayModule';
// import './components/5dayHeading';
import './components/chart';
import './components/api';
import './components/pixabay_api_service';
import query from './components/weather_api_service';
import './components/inputSearch';
import favCityTemplate from './templates/favListItem.hbs';
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree';
import './components/display_quotes';
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
  // starBtn: document.querySelector('.d_star-icon'),
  cityContainer: document.querySelector('.d_siema'),
  // deleteBtn: document.querySelector('.d_close-btn'),
  form: document.querySelector('#search-form'),
  navBtn: document.querySelector('.d_location-icon'),
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

refs.navBtn.addEventListener('click', () => {
  refs.input.value = '';
  startOneDayLayout();
});
startOneDayLayout();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi.fetchPictures().then(images => {
  const number = getRandomInt(3);
  document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
});

document.querySelector('.d_star-icon').addEventListener('click', () => {
  if (refs.input.value.trim()) {
    let favorites = window.localStorage.getItem('favorites');
    favorites = JSON.parse(favorites);
    if (!favorites) {
      favorites = new Array();
    }

    favorites.push(refs.input.value.trim());
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
  }
  document.querySelector('.d_star-icon').classList.add('d_full-star');
});

// const citiesFromStorage = JSON.parse(localStorage.getItem('item'));
// let savedCity = [];

const renderFavorites = () => {
  let favorites = window.localStorage.getItem('favorites');
  favorites = JSON.parse(favorites);
  document.querySelector('.d_slider-container').innerHTML = favCityTemplate(
    favorites,
  );

  document.querySelectorAll('.d_added-city').forEach(item => {
    item.addEventListener('click', event => {
      refs.input.value = event.target.text;
      queryLayoutOneDay(refs.input.value);
    });
  });

  document.querySelectorAll('.d_close-btn').forEach(item => {
    item.addEventListener('click', event => {
      let favorites = window.localStorage.getItem('favorites');
      favorites = JSON.parse(favorites);
      let index = favorites.indexOf(event.target.previousElementSibling.text);
      favorites.splice(index, 1);
      window.localStorage.setItem('favorites', JSON.stringify(favorites));
      renderFavorites();
    });
  });
  document.querySelector('.d_star-icon').classList.remove('d_full-star');
};
renderFavorites();
