import './styles.css';
import './css/page.scss';
import './media.css';
import pixabayApi from './components/pixabay_api_service';
import './components/rendering_degree';
import './components/api';
import quotes from './components/quotes_list';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

pixabayApi.fetchPictures().then(images => {
  const number = getRandomInt(3);
  document.body.style.backgroundImage = `url(${images.hits[number].largeImageURL})`;
});

//-------- Quotes ---------------
let quotesArray = quotes.quotesCollection;

let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

console.log(randomQuote);
