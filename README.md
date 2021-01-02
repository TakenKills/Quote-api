# What is this?
This is a npm package that gets random quots!

# installation
`npm i randomquote-api`

# How to use :
```
const RandomQuoteApi = require('randomquote-api')
// To get one random Quote you do
const randomquoteapi = new RandomQuoteApi()
const randomquote = randomquoteapi.randomQuote()
console.log(randomquote)

// to get Ten random quotes you do
const randomTen = randomquoteapi.randomTen()
console.log(randomTen)

// to get a number amount of quotes by who said them
const randomQuote = new RandomQuoteApi()
const getbyby = randomQuote.getbyby('J.R.R. Tolkien', 10)
console.log(getbyby)
```

## Stuck on [object Object] ? 
try this mapping it!  
```
const randomquoteapi = new RandomQuoteApi()
const randomTen = randomquoteapi.randomTen()

console.log(randomTen.map(q => q.quote).join("\n"))
```
this also works the same for the `getbyby()` function.

## Options
For the quotes itself you can use 
 - **quote** : Get the quote.
 - **by** : Get who wrote/said the quote.
 - **id** : Get the number of the quote.

Options for the "getbyby(name, n)" function
 - **name** : the name of the person who wrote the quote.
 - **n** : the number of quotes you want.

 ## Need any help?
 Join my discord server!
 https://discord.gg/Q34NvFVmwW
