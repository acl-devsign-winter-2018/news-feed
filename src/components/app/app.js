import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import ArticleList from '../articles/ArticleList';
import { searchNews } from '../../services/newsApi';

const template = new Template(html);

export default class App{
  
  handleSearch(searchTerm){
    this.searchTerm = searchTerm;
    this.pageIndex = 0;
    this.runSearch();
  }
  
  runSearch(){

    // this.loading.classList.remove('hidden');

    searchNews(this.searchTerm)
      .then(data => {
        const articles = data.articles;
        // const total = data.totalResults;
        console.log(data);
        const articleSection = this.articleSection;

        while(articleSection.hasChildNodes()){
          articleSection.appendChild(articleSection.lastChild);
        }

        const articleList = new ArticleList(articles);
        articleSection.appendChild(articleList.render());
      });

  }

  render(){
    const dom = template.render();
    
    this.articleSection = dom.getElementById('articles');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());


    return dom;
  }
}