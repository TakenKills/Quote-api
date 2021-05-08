import quote from "./quotes.json";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const quotes: Quote[] = quote;

function randomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomN(quoteArray: Quote[], n: number): Quote[] {
  const limit = quoteArray.length < n ? quoteArray.length : n;
  const randomIndicesSet = new Set<number>();

  while (randomIndicesSet.size < limit) {
    const random: number = Math.floor(Math.random() * quoteArray.length);
    if (!randomIndicesSet.has(random)) {
      randomIndicesSet.add(random);
    }
  }

  const numberArray: number[] = Array.from(randomIndicesSet);

  return numberArray.map((num) => quoteArray[num]);
}

function randomTen(): Quote[] {
  return randomN(
    quotes.filter((quotes: Quote) => quotes.quote),
    10
  );
}

function getbyauthor(name: string, number: number) {
  if (!name && !number)
    throw new Error(
      `randomquote-api --- You must provide an authors name in the first paramater and or a number in the second paramater.`
    );
  let getByAuthor:
    | Quote[]
    | [
        {
          type: string;
          message: string;
        },
        Quote
      ];

  if (!number)
    getByAuthor = quotes.filter((quote) => {
      return quote.author.toLowerCase() === name.toLowerCase();
    });
  else
    getByAuthor = randomN(
      quotes.filter(function (quote) {
        return quote.author.toLowerCase() === name.toLowerCase();
      }),
      number
    );
  if (getByAuthor.length === 0)
    throw new Error(
      `randomquote-api --- Couldn't find anyone with that name..`
    );
  else {
    if (getByAuthor.length < number)
      console.warn(
        `I've only found ${getByAuthor.length} quotes written by ${name}.`
      );
    return getByAuthor;
  }
}

export = {
  randomQuote,
  randomTen,
  getbyauthor,
};
