document.addEventListener('DOMContentLoaded', (event) => {
    const bibleQuoteBtn = document.getElementById('bibleQuoteBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const submitQuote = document.getElementById('submitQuote');
    const userQuote = document.getElementById('userQuote');
    const userQuotes = document.getElementById('userQuotes');

    // Array of Bible quotes (you can expand this with more quotes)
    const bibleQuotes = [
        "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
        "The Lord is my shepherd; I shall not want. - Psalm 23:1",
        "Love your neighbor as yourself. - Leviticus 19:18"
    ];

    // Function to display a random Bible quote
    function displayBibleQuote() {
        const randomQuote = bibleQuotes[Math.floor(Math.random() * bibleQuotes.length)];
        quoteDisplay.textContent = randomQuote;
    }

    bibleQuoteBtn.addEventListener('click', displayBibleQuote);

    // Function to add user quote
    function addUserQuote() {
        if (userQuote.value.trim()) {
            const quoteElement = document.createElement('p');
            quoteElement.textContent = userQuote.value;
            userQuotes.appendChild(quoteElement);
            userQuote.value = ''; // Clear the textarea after adding the quote
        }
    }

    submitQuote.addEventListener('click', addUserQuote);
});