import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
  constructor(articleInfo) {
    this.articleInfo = articleInfo;
  }

  render() {
    const dom = template.render();
    const articleInfo = this.articleInfo;

    dom.querySelector('.title').textContent = articleInfo.title;
    dom.querySelector('.author').textContent = articleInfo.author ? articleInfo.author : "";
    dom.querySelector('.description').textContent = articleInfo.description ? articleInfo.description : "";
    dom.querySelector('.thumbnail').setAttribute('src', `${articleInfo.urlToImage ? articleInfo.urlToImage : ""}`);
    dom.querySelector('.thumbnail').setAttribute('alt', articleInfo.title);
  }
}