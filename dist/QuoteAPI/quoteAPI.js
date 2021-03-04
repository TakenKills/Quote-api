"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var quotes_json_1 = __importDefault(require("./quotes.json"));
function randomQuote() {
    return quotes_json_1["default"][Math.floor(Math.random() * quotes_json_1["default"].length)];
}
function randomN(quoteArray, n) {
    var limit = quoteArray.length < n ? quoteArray.length : n;
    var randomIndicesSet = new Set();
    while (randomIndicesSet.size < limit) {
        var random = Math.floor(Math.random() * quoteArray.length);
        if (!randomIndicesSet.has(random)) {
            randomIndicesSet.add(random);
        }
    }
    var numberArray = Array.from(randomIndicesSet);
    return numberArray.map(function (num) {
        return quoteArray[num];
    });
}
function randomTen() {
    return randomN(quotes_json_1["default"].filter(function (quotes) { return quotes.quote; }), 10);
}
function getbyauthor(name, number) {
    if (!name && !number)
        throw new Error("randomquote-api --- You must provide an authors name in the first paramater and or a number in the second paramater.");
    var getByAuthor;
    if (!number)
        getByAuthor = quotes_json_1["default"].filter(function (quote) {
            return quote.author.toLowerCase() === name.toLowerCase();
        });
    else
        getByAuthor = randomN(quotes_json_1["default"].filter(function (quote) {
            return quote.author.toLowerCase() === name.toLowerCase();
        }), number);
    if (getByAuthor.length === 0)
        throw new Error("randomquote-api --- Couldn't find anyone with that name..");
    else {
        if (getByAuthor.length < number)
            getByAuthor.push({
                type: "message",
                message: "I've only found " + getByAuthor.length + " quotes written by " + name + "."
            });
        return getByAuthor;
    }
}
module.exports = {
    randomQuote: randomQuote,
    randomTen: randomTen,
    getbyauthor: getbyauthor,
    randomN: randomN
};
