import html from './app.html';
import './app.css';
import Template from '../Template';
import Search from '../search/Search';
import NewsList from '../news/News-list';
import Api from  '../../services/newsApi';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    this.searchTerm = searchTerm;
    this.runSearch();
  }

  runSearch() {
    Api.searchNews()
      .then(data => {
        const news = data.articles;
        const newsSection = this.newsSection;

        while(newsSection.hasChildNodes()) {
          newsSection.removeChild(newsSection.lastChild);
        }

        const newsList = new NewsList(news);
        newsSection.appendChild(newsList.render());
      });
  }
  
  render() {
    const dom = template.render();
    this.newsSection = dom.getElementById('news');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());
    return dom;
  }
}