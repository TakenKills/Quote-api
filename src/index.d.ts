interface Quote {
    id: number,
    quote: string,
    author: string,
  }
  
  export declare function randomQuote(): Quote;
  export declare function randomTen(): Quote[];
  export declare function getbyauthor(name: string, n: number): Quote[];