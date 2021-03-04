const QuoteAPI = require('../dist/index.js');
const log = (string) => console.log(string);

if (QuoteAPI.getbyauthor(`Voltaire`, 2).filter(quote => quote.type === 'message')) log(`yourmom`)