import Template from '../Template';
import html from './app.html';
import Search from '../search/Search';
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
      console.log(data);
      })

  }

  render(){
    const dom = template.render();
    
    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());


    return dom;
  }
}