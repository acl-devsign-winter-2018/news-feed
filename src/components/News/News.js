import html from './news.html';
import './news.css';
import Template from '../Template';

const template = new Template(html);
export default class News {
  constructor(news) {
    this.article = news;
   

  } 
  render() {
    const dom = template.render();
    dom.querySelector('.title').textContent = this.article.title;
    dom.querySelector('.author').textContent = this.article.author;
    dom.querySelector('.publishedAt').textContent = this.article.publishedAt;
    dom.querySelector('.description').textContent = this.article.description;

    const img = dom.querySelector('.urlToImage'); 
   
    img.setAttribute('src', this.article.urlToImage);
    img.setAttribute('alt', `${this.article.title} by ${this.article.author}`);
    return dom;
  }
}