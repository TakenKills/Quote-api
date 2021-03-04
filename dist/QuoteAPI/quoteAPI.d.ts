declare function randomQuote(): {
  id: number;
  quote: string;
  author: string;
};

declare function randomTen(): object[];
declare function getbyauthor(name: string, number: number): object[];
declare const _default: {
  randomQuote: typeof randomQuote;
  randomTen: typeof randomTen;
  getbyauthor: typeof getbyauthor;
};
export = _default;
