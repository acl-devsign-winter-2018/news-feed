import html from './category.html';
import searchHtml from './search.html';
import './category.css';
import Template from '../Template';

const template = new Template(html);
const searchTemplate = new Template(searchHtml);

export default class Category {
  constructor(onClick) {
    this.onClick = onClick;
  }

  handleCategoryClick(event, target) {
    event.preventDefault();
    this.onClick(target.textContent);
  }

  handleHamburgerClick(event, categories) {
    event.preventDefault();
    categories.classList.toggle('hidden');
  }

  render() {
    const dom = template.render();

    const hamburger = dom.querySelector('#hamburger-icon');
    const categories = dom.querySelector('#categories');
    hamburger.addEventListener('click', event => this.handleHamburgerClick(event, categories), false);

    const categoryNav = dom.querySelector('ul');
    categoryNav.addEventListener('click', event => this.handleCategoryClick(event, event.target), false); //send over event as well as targeted li

    return dom;
  }
}