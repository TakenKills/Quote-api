const quotes = require('./quote.json')

const randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const randomN = (quoteArray, n) => {
  const limit = quoteArray.length < n ? quoteArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const random = Math.floor(Math.random() * quoteArray.length);
    if (!randomIndicesSet.has(random)) {
      randomIndicesSet.add(random);
    }
  }

  return Array.from(randomIndicesSet).map(random => {
    return quoteArray[random];
  });
};

const randomTen = () => randomN(quotes.filter(quotes => quotes.quote), 10);

const getbyby = (name ,n) => randomN(quotes.filter(quote => quote.by === name), n)


exports.randomn = randomN;
exports.getbyby = getbyby;
exports.randomQuote = randomQuote;
exports.randomTen = randomTen;