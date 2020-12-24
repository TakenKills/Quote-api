# What is this?
This is a npm package that gets random quots!

# installation
`npm i randomquote-api`

# How to use :
```
const { randomQuote, randomTen } = require('randomquote-api')


// to get everything e.g. (id : 1, quote: "some-quote", by: "some-person")
console.log(randomQuote())

// to get the quote you do 
console.log(randomQuote().quote)

// to get the the person who said the quote
console.log(randomQuote().by)
```
## Options
randomQuote-api supports 3 options as listed up
 - **quote** : Get the quote.
 - **by** : Get who wrote that quote.
 - **id** : Get the number of the quote. 
