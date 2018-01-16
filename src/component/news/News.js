import html from './news.html';
import './news.css';
import Template from '../Template';

const template = new Template(html);

export default class News {
  constructor(news) {
    this.article = news.articles;
  }

  render() {
    const dom = template.render();
    dom.querySelector('.title').textContent = this.title; //we had this.article.title but not sure if correct
    dom.querySelector('.author').textContent = this.author[0];
    dom.querySelector('.publishedAt').textContent = this.publishedAt;
    dom.querySelector('.description').textContent = this.description;
    
    const img = dom.querySelector('.urlToImage');
    img.setAttribute('src', this.urlToImage);
    img.setAttribute('alt', `${this.title} by ${this.author[0]}`);

    return dom;
  }
}