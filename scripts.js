const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuotBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Get Quotes From API
let apiQuotes = [];

// Show Loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
	loader.hidden = true;
	quoteContainer.hidden = false;
}

async function getQuotes() {
	loading();
	const apiUrl = 'https://zenquotes.io/api/quotes/';
	const proxyURL = 'https://cors-anywhere.herokuapp.com/';

	try {
		const response = await fetch(proxyURL + apiUrl);
		let apiQuotes = await response.json();

		const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
		authorText.innerText = quote.a;
		quoteText.innerText = quote.q;
		complete();
	} catch (err) {
		console.log(err);
	}
}

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuotBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
