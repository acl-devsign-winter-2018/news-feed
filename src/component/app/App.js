import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';

const template = new Template(html);

export default class App {
  render() {
    const dom = template.render();
    const searchSection = dom.getElementById('search');

    const search = new Search();
    searchSection.appendChild(search.render());

    return dom;
  }
}