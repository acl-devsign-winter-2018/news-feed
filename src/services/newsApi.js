const KEY = 'f36e77c8c5ce43cbba8790773ba56fe8';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`;

// const storage = window.localStorage;

fetch(NEWS_URL)
  .then(response => response.json())
  .then(data => console.log(data));