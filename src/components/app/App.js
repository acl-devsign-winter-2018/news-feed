import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';
import ArticleList from '../articles/ArticleList';
import {searchArticles} from '../../servies/newsApi';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    this.searchTerm = searchTerm;
    this.pageIndex = 0;
    this.runSearch();
  }

  handlePaging(pageIndex) {
    this.pageIndex = pageIndex;
    this.runSearch();
  }

  runSearch() {
    this.loading.classList.remove('hidden');

    searchArticles(this.searchTerm, this.pageIndex)
      .then(data => {
        const articles = data.articles;
        const total = data.totalResults;

        const articlesSection = this.articlesSection;

        while(articlesSection.hasChildNodes()) {
          articlesSection.removeChild(articlesSection.lastChild);
        }

        const articleList = new ArticleList(articles);
        articlesSection.appendChild(articleList.render());

        this.paging.update(this.pageIndex, 20, total);
        this.loading.classList.add('hidden');
      });
  } //runSearch

  render() {
    const dom = template.render();

    this.loading = dom.getElementById('loading');
    this.articlesSection = dom.getElementById('articles');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    const pagingSection = dom.getElementById('paging');
    this.paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    pagingSection.appendChild(this.paging.render());

    return dom;

  } //render

}