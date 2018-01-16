import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(article) {
    // console.log(article);
    this.article = article;
  }

  render() {
    const dom = template.render();
    const article = this.article;
    // console.log('inside render', article);
    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent = article.author;
    dom.querySelector('.publisher').textContent = article.publisher;
    dom.querySelector('.publishedDate').textContent = article.publishedDate;
    dom.querySelector('.description').textContent = article.description;
    
    const img = dom.querySelector('.thumbnail');
    if(article.urlToImage) {
      console.log(article.urlToImage);
      img.setAttribute('src', article.urlToImage);
      img.setAttribute('alt', `${article.title} by ${article.author}`);
    }
    else{
      img.classList.add('hidden');
    }
    return dom;
  }
}