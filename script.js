"use strict";
var colorSchemes = ["#87c5f5", "#603e94", "#3D9970", "#ff7373", "#fa8072", "#afeeee", "#40e0d0", "#ffc0cb", "#81d8d0"];
var quotes = [
    {
        "quote": "We are all in the gutter, but some of us are looking at the stars.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "Imagination is more important than knowledge",
        "author": "Albert Einstein"
    },
    {
        "quote": "The best preparation for tomorrow is doing your best today.",
        "author": "H. Jackson Brown Jr"
    },
    {
        "quote": "Success is what happens when preparation meets opportunity.",
        "author": "Unknown"
    },
    {
        "quote": "The more I practice, the luckier I get.",
        "author": "Gary Player"
    },
    {
       "quote": "Keep your eyes on the stars and your feet on the ground.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "I think therefore I am",
        "author": "René Descartes"
    }
];

var backgroundColor;
var quote;

function setTweet(quote, author) {
    var url = "https://twitter.com/intent/tweet?text=" + ('"' + quote + '"' + " - " + author).replace(" ", "+");
    document.getElementById("twitter").setAttribute("href", url);
}

function changeColorScheme() {
    var body = document.body,
    quote = document.getElementsByClassName("quote"),
    author = document.getElementsByClassName("author"),
    social = document.getElementsByClassName("social"),
    newColor;
    do { // ensure there actually is a color change!
        var randomIndex = Math.floor(Math.random() * colorSchemes.length),
        newColor = colorSchemes[randomIndex];
    } while (newColor === backgroundColor);
    backgroundColor = newColor;
    
    document.getElementById("newQuote").style.setProperty("background-color", backgroundColor, "important");
    document.getElementById("newQuote").style.setProperty("border-color", backgroundColor, 'important');
    document.body.style.setProperty("background-color", backgroundColor);
    [quote, author, social].forEach(function (e) {
        e[0].style.setProperty("color", backgroundColor);
    });
}

function populateQuoteInformation() {
    var newQuote;
    do { // ensure a new quote is supplied
        var randomIndex = Math.floor(Math.random() * quotes.length),
        obj = quotes[randomIndex];
        newQuote = obj.quote;
    } while (newQuote === quote);
    quote = obj.quote;
    document.getElementsByClassName("quote")[0].innerHTML = ('<i class="fa fa-quote-left" aria-hidden="true"></i> ' + obj.quote);
    document.getElementsByClassName("author")[0].innerHTML = ('- ' + obj.author);
    setTweet(obj.quote, obj.author);
}

function createInteractiveButton() {
    document.getElementById("newQuote").onclick = (function () {
        changeColorScheme();
        populateQuoteInformation();
    });
}

window.onload = (function () {
    changeColorScheme();
    populateQuoteInformation();
    createInteractiveButton();
});