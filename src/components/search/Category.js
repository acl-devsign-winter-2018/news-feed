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
    if(target.textContent === 'search') {
      this.changeToSearchPage();
    } else{
      this.onClick(target.textContent);
    }
  }

  changeToSearchPage() { // TODO: how to change to search page from category component?
    console.log('running changeToSearchPage');
    const dom2 = searchTemplate.render();
    const form = dom2.querySelector('form');
    console.log(form);

    form.classList.remove('hidden');
  }

  render() {
    const dom = template.render();

    const categoryNav = dom.querySelector('ul');
    categoryNav.addEventListener('click', event => this.handleCategoryClick(event, event.target), false); //send over event as well as targeted li

    return dom;
  }
}