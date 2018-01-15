const KEY = '3a73eda8828f4f74a3e66753884a13a8';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`;

export function searchNews(searchTerm){
  return fetch(`${NEWS_URL}&q=${searchTerm}&maxResults=40`)
  //defaults to 10 bumping it up to 40
  
    .then(response => response.json());

}