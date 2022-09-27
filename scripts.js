// Get Quotes From API

let apiQuotes = [];

async function getQuotes() {
	const apiUrl = 'https://zenquotes.io/api/quotes/';
	const proxyURL = 'https://cors-anywhere.herokuapp.com/';

	try {
		const response = await fetch(proxyURL + apiUrl);
		let apiQuotes = await response.json();

		const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
		console.log(quote);
	} catch (err) {
		console.log(err);
	}
}

// On Load
getQuotes();
