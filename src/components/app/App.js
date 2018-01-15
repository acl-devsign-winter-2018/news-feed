import html from './app.html';
import './app.css';
import Template from '../Template';
import Search from '../search/Search';
import Api from  '../../services/newsApi';

const template = new Template(html);
Api.getHeadLines();

export default class App {
  render() {
    const dom = template.render();
    const searchSection = dom.getElementById('search');
    const search = new Search();
    searchSection.appendChild(search.render());
    return dom;
  }
}