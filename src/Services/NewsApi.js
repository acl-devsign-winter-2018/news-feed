const KEY = '1d3c73c5e4ce4ae0bf9f91555bd28bed';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?apiKey=${KEY}`;

const storage = window.localStorage;

export function searchNews(searchTerm) {
  const url = `${NEWS_URL}&q=${searchTerm}&maxResults=40`;

  const data =  storage.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then (data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
}
