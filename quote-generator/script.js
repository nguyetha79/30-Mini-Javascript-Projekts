const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content
    author.innerHTML = data.author
  } catch (error) {
    console.log(error);
  }
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600px, height=300px")
}

