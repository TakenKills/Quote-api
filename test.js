const RandomQuoteApi = require('./index.js')

const a = new RandomQuoteApi()
console.log(a.getbyauthor(`j.r.r. tOLkIeN`, 10))