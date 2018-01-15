const KEY = 'f36e77c8c5ce43cbba8790773ba56fe8';
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`;

const storage = window.localStorage;
const apiServices = {};

apiServices.getHeadLines = () => {
  const data = storage.getItem(NEWS_URL);
    if(data) return Promise.resolve(JSON.parse(data)); // eslint-disable-line
    
  return fetch(NEWS_URL)
    .then(response => response.json())
    .then(data => {
      storage.setItem(NEWS_URL, JSON.stringify(data));
      return data;
    });
};

apiServices.searchNews = (SEARCH) => {
  const SEARCH_URL = `https://newsapi.org/v2/everything?q=${SEARCH}&from=2018-01-12&sortBy=popularity&apiKey=${KEY}`;
  const data = storage.getItem(SEARCH_URL);
    if(data) return Promise.resolve(JSON.parse(data)); // eslint-disable-line
    
  return fetch(SEARCH_URL)
    .then(response => response.json())
    .then(data => {
      storage.setItem(NEWS_URL, JSON.stringify(data));
      return data;
    });
};

export default apiServices;