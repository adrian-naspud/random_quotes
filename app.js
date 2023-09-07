const quotes = [
  {
    quote: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius",
    image:
      "https://imgs.search.brave.com/dzAdmYZV02UpYSmPpxbaBhiNqg9XFDOnVjYGlFYFrG4/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5y/aW92aWRhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/OC9tYXJjdXNfYXVy/ZWxpdXNfNC5qcGc"
  },
  {
    quote: "You make your own luck if you stay at it long enough.",
    author: "Naval Ravikant",
    image:
      "https://imgs.search.brave.com/6pEPB3DNFuqj7lT-lPSBbhOhG56vjuMZ14HQfjpJAXw/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9iaW9n/cmFwaHltYXNrLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNS9OYXZhbC1S/YXZpa2FudF9FbnRy/ZXByZW5ldXIuanBn"
  },
  {
    quote:
      "Knowledge is a skyscraper. You can take a shortcut with a fragile foundation of memorization, or build slowly upon a steel frame of understanding.",
    author: "Naval Ravikant",
    image:
      "https://imgs.search.brave.com/6pEPB3DNFuqj7lT-lPSBbhOhG56vjuMZ14HQfjpJAXw/rs:fit:400:400:1/g:ce/aHR0cHM6Ly9iaW9n/cmFwaHltYXNrLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNS9OYXZhbC1S/YXZpa2FudF9FbnRy/ZXByZW5ldXIuanBn"
  },
  {
    quote: "Waste no more time arguing what a good man should be. Be One",
    author: "Marcus Aurelius",
    image:
      "https://imgs.search.brave.com/dzAdmYZV02UpYSmPpxbaBhiNqg9XFDOnVjYGlFYFrG4/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5y/aW92aWRhLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/OC9tYXJjdXNfYXVy/ZWxpdXNfNC5qcGc"
  },
  {
    quote: "If a man knows not which port he sails, no wind is favorable.",
    author: "Seneca",
    image:
      "https://imgs.search.brave.com/WYffu98I40I27ljPEvHhnKIcwonxI3FyU3y1feiUOFc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mdGht/Yi50cW4uY29tL2Rv/Qk1LQXRnVVJ6LUs4/NURTUnRxRjJNNkRV/OD0vMjY2NHgzNDEz/L2ZpbHRlcnM6Zmls/bChhdXRvLDEpL21h/cmJsZS1idXN0LW9m/LWx1Y2l1cy1hbm5h/ZXVzLXNlbmVjYS1j/b3JkdWJhLTQtYmMt/cm9tZS02NS1yb21h/bi1waGlsb3NvcGhl/ci1hbmQtcG9saXRp/Y2lhbi0xNjIyNzg3/NjctNTg5YTNjYWU1/ZjliNTg3NGVlYzE2/MmM0LmpwZw"
  },
  {
    quote:
      "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
    author: "Seneca",
    image:
      "https://imgs.search.brave.com/WYffu98I40I27ljPEvHhnKIcwonxI3FyU3y1feiUOFc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mdGht/Yi50cW4uY29tL2Rv/Qk1LQXRnVVJ6LUs4/NURTUnRxRjJNNkRV/OD0vMjY2NHgzNDEz/L2ZpbHRlcnM6Zmls/bChhdXRvLDEpL21h/cmJsZS1idXN0LW9m/LWx1Y2l1cy1hbm5h/ZXVzLXNlbmVjYS1j/b3JkdWJhLTQtYmMt/cm9tZS02NS1yb21h/bi1waGlsb3NvcGhl/ci1hbmQtcG9saXRp/Y2lhbi0xNjIyNzg3/NjctNTg5YTNjYWU1/ZjliNTg3NGVlYzE2/MmM0LmpwZw"
  },
  {
    quote:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
    image:
      "https://imgs.search.brave.com/4vA7oNZbiX0DvrKpCOKPUUnu_BZeZcpF8Gk9aHihOmE/rs:fit:622:621:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tNUk5UktrUTFs/NjgvVnVzVFE4Y1VF/VEkvQUFBQUFBQUFH/UXMvUkpUNEdicTV3/M1UxXzhINDB4aHFw/ZlNWUEpYek5wOFV3/L3MxNjAwL2VwaWN0/ZXR1cyUyNTJCMS5q/cGc"
  }
];

const button = document.querySelector('#button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const authorPic = document.querySelector('.author-pic');

// button event listener fetch new quote
button.addEventListener('click', fetchQuote);

function fetchQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = `${quotes[random].quote}`;
  author.innerText = `${quotes[random].author}`;
  authorPic.src = `${quotes[random].image}`;
  setBgColor();
  currentUtterance = textToSpeech(quote.innerText)
}

window.addEventListener('load', fetchQuote)

// get random number function
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${90}%)`;
};

const setBgColor = () => {
  randomColor = getRandomColor();
  quote.style.backgroundColor = randomColor;
}

// TEXT TO SPEECH
let currentUtterance = null;

function textToSpeech(text) {
  if (currentUtterance !== null) {
    speechSynthesis.cancel()
  }
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance)
}

