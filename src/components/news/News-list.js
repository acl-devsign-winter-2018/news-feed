import html from './news-list.html';
import './news-list.css';
import Template from '../Template';
import News from './News';


const template = new Template(html);

export default class NewsList {
  constructor(news) {
    this.news = news;
  }
  
  render() {
    const dom = template.render();
    const section = dom.querySelector('section');

    this.news
      .map(article => new News(article))
      .map(articleComponent => articleComponent.render())
      .forEach(articleDom => section.appendChild(articleDom));
    
    return dom;
  }
}