import html from './category.html';
import './category.css';
import Template from '../Template';

const template = new Template(html);

export default class Category {
  constructor(onClick) {
    this.onClick = onClick;
  }

  handleCategoryClick(event, target) {
    event.preventDefault();
    this.onClick(target.textContent);
  }

  render() {
    const dom = template.render();
    // this.category = dom.querySelectorAll('li'); 
    //only selects first li.

    const categoryNav = dom.querySelector('ul');
    categoryNav.addEventListener('click', event => this.handleCategoryClick(event, event.target), false); //send over event as well as targeted li

    return dom;
  }
}