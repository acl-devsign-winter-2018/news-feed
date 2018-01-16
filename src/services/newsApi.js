const KEY = 'b2829c303ae04b8e9ffff24d9926712f';
// const TECH_URL = `https://newsapi.org/v2/everything?sources=the-verge&apiKey=${KEY}`;
const TECH_URL = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${KEY}`;

// Put in local storage
const storeLocal = window.localStorage;

export function searchNews(searchTerm, pageIndex = 0) {
  const url = `${TECH_URL}&q=${searchTerm}&maxResults=6&startIndex=${pageIndex}`;
  console.log(url);

  // Get local storage
  const data = storeLocal.getItem(url);
  if(data) return Promise.resolve(JSON.parse(data));

  // Return local storage
  return fetch(url)
    .then(response => response.json())
    .then(data => {storeLocal.setItem(url, JSON.stringify(data));
      return data;
    });
}
