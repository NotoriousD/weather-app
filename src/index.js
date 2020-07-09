import './styles.css';
import './css/page.scss';
import './media.css'
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree'
import './components/api'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi
  .fetchPictures()
  .then(images => {
    const number = getRandomInt(3);
    document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`
  })
