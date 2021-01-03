const quotes = require('./quotes.json');

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomN(quoteArray, n) {
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
}

function randomTen() {
  return randomN(quotes.filter(quotes => quotes.quote), 10);
}

function getbyauthor(name, n) {
  const getByAuthor = randomN(quotes.filter(quote => quote.author.toLowerCase() === name.toLowerCase()), n)
  if(getByAuthor.length === 0) throw new Error(`randomquote-api Couldn't find anyone with that name..`)
  else return getByAuthor;
}

module.exports = {
  randomQuote, 
  randomN,
  randomTen,
  getbyauthor,
};