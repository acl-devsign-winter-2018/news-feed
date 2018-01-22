const KEY = '45c3ddb8dc424222895fcdb15224fe02';
const NEWS_URL = 'https://newsapi.org/v2/everything?';

const storage = window.localStorage;

export function searchNews(searchTerm){
  const url = `${NEWS_URL}q=${searchTerm}&sortBy=popularity&apiKey=${KEY}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
}