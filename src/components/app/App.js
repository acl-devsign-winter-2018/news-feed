import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';
import ArticleList from '../articles/ArticleList';
import { searchAllArticles } from '../../services/newsApi';
import { searchByCategory } from '../../services/newsApi';

const template = new Template(html);

export default class App {

  // handleCategory(category) {
  //   this.category = category;
  //   this.pageIndex = 0;
  //   this.runCategory();
  // }

  handleSearch(searchTerm) {
    this.searchTerm = searchTerm;
    this.pageIndex = 1;
    this.runSearch();
  }

  handlePaging(pageIndex) {
    this.pageIndex = pageIndex;
    this.runSearch();
  }

  showArticles(data) {
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
  }

  // runCategory() {
  //   this.loading.classList.remove('hidden');

  //   searchByCategory(this.category, this.pageIndex)
  //     .then(data => this.showArticles(data));
  // }

  runSearch() {
    this.loading.classList.remove('hidden');

    searchAllArticles(this.searchTerm, this.pageIndex)
      .then(data => this.showArticles(data));
  }

  render() {
    const dom = template.render();

    this.loading = dom.getElementById('loading');
    this.articlesSection = dom.getElementById('articles');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    // const category = new Search(category => this.handleCategory(category));
    // searchSection.appendChild(category.render());

    const pagingSection = dom.getElementById('paging');
    this.paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    pagingSection.appendChild(this.paging.render());

    return dom;

  } //render

}