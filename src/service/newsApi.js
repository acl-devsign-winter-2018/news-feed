const KEY = '3a73eda8828f4f74a3e66753884a13a8';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`;

const storage = window.localStorage;

export function searchNews(searchTerm){
  const url = `${NEWS_URL}&q=${searchTerm}&maxResults=40`;
  //defaults to 10 bumping it up to 40

  // .then(response => response.json());

  const data = storage.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });

}