let apiQuotes = [];


//get qoutes from api:

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
        console.log(apiQuotes[12])

    } catch (error) {
        console.log(error)
    }
}

getQuotes();