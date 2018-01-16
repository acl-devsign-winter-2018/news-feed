import Template from '../Template';
import html  from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';
import { searchNews } from '../../services/newsfeed.api';


const template = new Template(html);

export default class App {

  handleSearch(searchParams) {
    this.searchParams = searchParams;
    this.pageIndex = 0;
    this.runSearch();
  }

  handlePaging(pageIndex) {
    this.pageIndex =  pageIndex;
    this.runSearch();
  }

  runSearch() {
    
    this.loading.classList.remove('hidden');

    searchNews(this.searchParams, this.pageIndex)
      .then(data => {
        const articles = data.articles;
        const total = data.totalResults;

      });
  }

  render() {
    const dom = template.render();

    this.loading =  dom.getElementById('loading');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchParam => this.handleSearch(searchParam));
    searchSection.appendChild(search.render());

    const pagingSection = dom.getElementById('paging');
    this.paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    pagingSection.appendChild(this.paging.render());

    return dom;
  }
}