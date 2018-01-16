import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(articles) {
    // Get from api
    this.articles = articles;
  }

  render() {
    const dom = template.render();

    // Set path from api
    const article = this.articles;

    // Add content from api
    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent = article.author;
    dom.querySelector('.publisher').textContent = article.source.name;
    dom.querySelector('.publishedAt').textContent = article.publishedAt;
    // dom.querySelector('.url').textContent = article.url;
    dom.querySelector('.description').textContent = article.description;

    // Add src and alt to images
    const img = dom.querySelector('.newsImage');
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