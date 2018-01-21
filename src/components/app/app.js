import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../paging/Paging';
import ArticleList from '../articles/ArticleList';
import { searchNews } from '../../services/newsApi';

const template = new Template(html);

export default class App{
  
  handleSearch(searchTerm){
    this.searchTerm = searchTerm;
    this.pageIndex = 0;
    this.runSearch();
  }

  handlePaging(pageIndex){
    this.pageIndex = pageIndex;
    this.runSearch();
  }
  
  runSearch(){

    // this.loading.classList.remove('hidden');

    searchNews(this.searchTerm)
      .then(data => {
        const articles = data.articles;
        const total = data.totalResults;
        
        const articleSection = this.articleSection;

        while(articleSection.hasChildNodes()){
          articleSection.removeChild(articleSection.lastChild);
        }

        const articleList = new ArticleList(articles);
        articleSection.appendChild(articleList.render());

        // this.paging.update(this.pageIndex, 20, total);
        // this.loading.classlist.add('hidden');
      });

  }

  render(){
    const dom = template.render();
    
    this.articleSection = dom.getElementById('articles');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    // const pagingSection = dom.getElementById('paging');
    // this.paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    // pagingSection.appendChild(this.paging.render());

    return dom;
  }
}