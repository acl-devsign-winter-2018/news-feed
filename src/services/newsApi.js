const KEY = '8b80541342984ebe86349afc2cd81bb4';
const NEWS_URL = 'https://newsapi.org/v2/';

const storage = window.localStorage;

export function searchByCategory(category, pageIndex = 1) {
  const url = `${NEWS_URL}top-headlines?category=${category}&sortBy=popularity&page=${pageIndex}&apiKey=${KEY}`; // category: business entertainment general health science sports technology
  return checkStorage(url);
}

export function searchWithinCategory(category, searchTerm, pageIndex = 1) {
  let url;
  if(category) {
    url = `${NEWS_URL}top-headlines?q=${searchTerm}&category=${category}&sortBy=popularity&page=${pageIndex}&apiKey=${KEY}`; // category: business entertainment general health science sports technology
  } else{
    url = `${NEWS_URL}everything?q=${searchTerm}&sortBy=popularity&page=${pageIndex}&apiKey=${KEY}`; //if search happens without a category selection
  }
  return checkStorage(url);
}

function checkStorage(url) {
  const data = storage.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });

}