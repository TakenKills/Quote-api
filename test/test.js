const QuoteAPI = require('../src/index');
const quotes = require('../src/QuoteAPI/quotes.json');

console.log(QuoteAPI.randomN(quotes, 10))