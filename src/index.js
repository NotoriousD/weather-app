import './styles.css';
import './css/fiveday.scss';
import './components/5dayModule';
// import './components/5dayHeading'
// import './components/5daySlider'
import './components/chart';
import './css/page.scss';
import './media.css';
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree';
import './components/api';
// import quotes from './components/quotes_list';
import './components/display_quotes';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi.fetchPictures().then(images => {
  const number = getRandomInt(3);
  document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
});
