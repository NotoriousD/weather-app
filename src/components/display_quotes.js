import quotes from './quotes_list';

export { randomQuote };

let quotesArray = quotes.quotesCollection;

let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
