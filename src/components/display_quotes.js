import quotes from './quotes_list';

let quotesArray = quotes.quotesCollection;


const innerQuote = document.querySelector('.vh_quotes_text');
const innerAutor = document.querySelector('.vh_quotes_autor');


const generateQuote = setInterval(() => {
  let randomIndex = randomIntegerFromInterval(0, quotesArray.length - 1);
  innerQuote.textContent = quotesArray[randomIndex].quote;
  innerAutor.textContent = quotesArray[randomIndex].author;
}, 8000);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

generateQuote
