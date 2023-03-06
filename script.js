const qouteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote');
const author = document.getElementById('author');
const newQouteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('twitter');
let apiQuotes = [];



function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        author.textContent = 'Unknown';
    } else {
        author.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
}

function tweet() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent};`
    window.open(twitterUrl, '_blank')
}


//get qoutes from api:
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
        console.log(apiQuotes[12]);
        newQuote();

    } catch (error) {
        console.log(error)
    }
}


newQouteBtn.addEventListener('click', newQuote);
tweetBtn.addEventListener('click', tweet);


getQuotes();