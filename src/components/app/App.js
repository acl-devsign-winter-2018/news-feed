import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';
import NewsFeed from '../news/NewsFeed';
import { searchNews } from '../../services/newsApi';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    searchNews(searchTerm)
      .then(data => {
        
        const news = data.articles;
        const total = data.totalResults;
        
        const newsSection = this.newsSection;

        while(newsSection.hasChildNodes()) {
          newsSection.removeChild(newsSection.lastChild());
        }
        const newsFeed = new NewsFeed(news);
        newsSection.appendChild(newsFeed.render());
      });
    
  }
  render() {
    const dom = template.render();
    this.newsSection = dom.getElementById('news');
    const searchSection = dom.getElementById('search');

    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    const pagingSection = dom.getElementById('paging');
    const paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    pagingSection.appenChild(paging.render());
    return dom;
  }
}