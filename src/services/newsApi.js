const KEY = '8b80541342984ebe86349afc2cd81bb4';
const NEWS_URL = 'https://newsapi.org/v2/';

const storage = window.localStorage;

export function searchAllArticles(searchTerm, pageIndex = 0) {
  const url = `${NEWS_URL}everything?q=${searchTerm}&sortBy=relevancy&page=${pageIndex}&${KEY}`;

  return checkStorage(url);
}

export function searchByCategory(category, pageIndex = 0) {
  const url = `${NEWS_URL}top-headlines?q=${category}&sortBy=relevancy&page=${pageIndex}&${KEY}`; // category: business entertainment general health science sports technology

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