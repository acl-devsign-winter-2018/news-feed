const KEY = '1d3c73c5e4ce4ae0bf9f91555bd28bed';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=${KEY}`;

export function searchNews(searchTerm) {
  return fetch(`${NEWS_URL}&q=${searchTerm}&maxResults=40`) 
    .then(response => response.json());
    
}