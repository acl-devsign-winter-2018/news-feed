import html from './app.html';
import './app.css';
import Template from '../Template';
import Search from '../search/Search';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    console.log('SEARCH', searchTerm);
  }
  render() {
    const dom = template.render();
    const searchSection = dom.getElementById('search');

    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    return dom;
  }
}