import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(article) {
    this.article = article; //TODO: not sure if right?
  }

  render() {
    const dom = template.render();
    const article = this.article;

    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent = article.author ? article.author : "";
    dom.querySelector('.description').textContent = article.description ? article.description : "";
    dom.querySelector('.thumbnail').setAttribute('src', `${article.urlToImage ? article.urlToImage : ""}`);
    dom.querySelector('.thumbnail').setAttribute('alt', article.title);
    
    return dom;
  }
}