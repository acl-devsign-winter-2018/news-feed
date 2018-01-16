import Template from '../Template';
import html  from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';


const template = new Template(html);

export default class App {

  render() {
    const dom = template.render();
  }
}