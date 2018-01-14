import html from './search.html';
import './search.css';
import Template from '../Template';

const template = new Template(html);

export default class Search {

  render() {
    const dom = template.render();

    return dom;
  }
}