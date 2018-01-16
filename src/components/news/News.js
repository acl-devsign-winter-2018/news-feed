import html from './news.html';
import './news.css';
import Template from '../Template';

const template = new Template(html);

export default class News {
  constructor(article) {
    this.article = article;
  }
  
  render() {
    const dom = template.render();
    const article = this.article;

    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent =  article.author;
    dom.querySelector('.publisher').textContent = article.source.name;
    dom.querySelector('.publishedAt').textContent = article.publishedAt;
    dom.querySelector('.description').textContent = article.description;
    
    const img = dom.querySelector('.thumbnail');
    if(article.urlToImage) {
      img.setAttribute('src', article.urlToImage);
      img.setAttribute('alt', `${article.title} by ${article.author}`);
    } 
    else{
      img.classList.add('hidden');
    }
    return dom;
  }
}