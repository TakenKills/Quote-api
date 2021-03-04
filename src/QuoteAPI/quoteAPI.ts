import {default as quotes} from './quotes.json';

interface Quote {
    id: number,
    quote: string,
    author: string,
  }

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomN(quoteArray: object[], n: number) {
  const limit = quoteArray.length < n ? quoteArray.length : n;
  const randomIndicesSet = new Set<number>();

  while (randomIndicesSet.size < limit) {
    const random: number = Math.floor(Math.random() * quoteArray.length);
    if (!randomIndicesSet.has(random)) {
      randomIndicesSet.add(random);
    }
  }

  const numberArray: number[] = Array.from(randomIndicesSet);
  
      return numberArray.map(num => {
          return quotes[num]
      })
}

function randomTen() {
  return randomN(quotes.filter((quotes: Quote) => quotes.quote), 10);
}

function getbyauthor(name: string, n: number) {
  const getByAuthor = randomN(quotes.filter((quote: Quote) => quote.author.toLowerCase() === name.toLowerCase()), n)
  if(getByAuthor.length === 0) throw new Error
  (`randomquote-api --- Couldn't find anyone with that name..`)
  else return getByAuthor;
}

export = {
  randomQuote, 
  randomN,
  randomTen,
  getbyauthor,
};