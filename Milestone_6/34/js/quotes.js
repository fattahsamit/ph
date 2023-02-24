const loadQuote = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  // console.log(quote.quote);
  blockQuote.innerText = quote.quote;
};

loadQuote();
