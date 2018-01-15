import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(article) {
    this.article = article;
  }

  render() {
    const dom = template.render();
    const article = this.article;

    dom.querySelector('.title').textContent = article.title;
    dom.querySelector('.author').textContent = article.author ? article.author : 'N/A';
    dom.querySelector('.description').textContent = article.description ? article.description : 'Click to read more...';
    dom.querySelector('.thumbnail').setAttribute('src', `${article.urlToImage ? article.urlToImage : 'https://image.flaticon.com/icons/svg/8/8235.svg'}`);
    dom.querySelector('.thumbnail').setAttribute('alt', article.title);
    dom.querySelectorAll('.article-link').forEach(element => element.setAttribute('href', article.url));
    dom.querySelector('.published-date').textContent = new Date(article.publishedAt);
    
    return dom;
  }
}