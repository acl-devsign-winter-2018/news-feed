import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(article) {
    this.article = article.articles;
  }

  render() {
    const dom = template.render();
    const article = this.article;

    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent = article.author;
    dom.querySelector('.publisher').textContent = article.publisher;
    dom.querySelector('.publishedDate').textContent = article.publishedDate;
    dom.querySelector('.description').textContent = article.description;
    
    const img = dom.querySelector('.thumbnail');
    if(article.urlToImage) {
      img.setAttribute('src', article.urlToImage.thumbnail);
      img.setAttribute('alt', `${article.title} by ${article.author[0]}`);
    }
    else{
      img.classList.add('hidden');
    }
    return dom;
  }
}