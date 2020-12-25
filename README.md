# What is this?
This is a npm package that gets random quots!

# installation
`npm i randomquote-api`

# How to use :
```
const { randomQuote, getbyby, randomTen } = require('randomquote-api')


// to get everything e.g. (id : 1, quote: "some-quote", by: "some-person")
console.log(randomQuote())
```
// to get the quote you do 
console.log(randomQuote().quote)
```
// to get the the person who said the quote
console.log(randomQuote().by)
```
```
// to filter all the quotes by who wrote them
console.log(getbyby(Coco Chanel, 5)); // (name, number) the name is the "by" value and the //// "number" is how many quotes you want to get
```

```
//randomTen() gets 10 random qutoes for you.
console.log(randomTen());
```
#*Stuck on [object Object]*?
try to map them
console.log(getbyby(CoCo Chanel, 5).map(q => q.quote));
same goes for randomTen()

## Options
For the quotes itself you can use 
 - **quote** : Get the quote.
 - **by** : Get who wrote/said the quote.
 - **id** : Get the number of the quote.

Options for the "getbyby()" function
 - **name** : the name of the person who wrote the quote.
 - **n** : the number of quotes you want.
