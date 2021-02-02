# What is this?
This is a npm package that gets random quotes!

# installation
`npm i randomquote-api`

# How to use :
```
const Quotes = require('randomquote-api')

// To get one random Quote you do

const randomquote = Quotes.randomQuote();
console.log(randomquote)

// to get Ten random quotes you do

const randomTen = Quotes.randomTen()
console.log(randomTen)

// to get a number amount of quotes by who said them

const getbyauthor = Quotes.getbyauthor('J.R.R. Tolkien', 10)
console.log(getbyauthor)

```

## Stuck on [object Object] ? 
try mapping it!
```
const Quotes = require('randomquote-api')
const randomTen = Quotes.randomTen()

console.log(randomTen.map(q => q.quote).join("\n"))

```
this also works the same for the `getbyauthor()` function.

## Options
For the quotes itself you can use
 - **quote** : Get the quote.
 - **author** : Get who wrote/said the quote.
 - **id** : Get the number of the quote.

Options for the "getbyauthor(name, n)" function
 - **name** : the name of the person who wrote the quote.
 - **n** : the number of quotes you want.

 ## Need any help?
 Join my discord server!
 https://discord.gg/Q34NvFVmwW
 Or you can contact me on discord
 TakenKills#8990
