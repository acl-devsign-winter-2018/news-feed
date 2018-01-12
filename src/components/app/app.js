import Template from '../Template';
import html from './app.html';
import Search from '../search/Search';

const template = new Template(html);

export default class App{
  render(){
    const dom = template.render();
    
    const search = new Search();
    const searchBox = dom.getElementById('search');
    searchBox.appendChild(search.render());


    return dom;
  }
}