const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const textDisplayElement = document.getElementById("textDisplay");
const textInputElement = document.getElementById("textInput");

export async function renderNewQuote() {
    const quote = await getRandomQuote();
    textDisplayElement.innerHTML = "";
    quote.split("").forEach(char => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        textDisplayElement.appendChild(charSpan);
    })
    textInputElement.value = null;
}

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(res => res.json())
        .then(data => data.content);
}