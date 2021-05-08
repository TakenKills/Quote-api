interface Quote {
    id: number;
    quote: string;
    author: string;
}
declare function randomQuote(): Quote;
declare function randomTen(): Quote[];
declare function getbyauthor(name: string, number: number): Quote[];
declare const _default: {
    randomQuote: typeof randomQuote;
    randomTen: typeof randomTen;
    getbyauthor: typeof getbyauthor;
};
export = _default;
