import html from './article-list.html';
import Template from '../Template';
import Article from './Article';

const template = new Template(html);

export default class ArticleList {
  constructor(articles) {
    this.articles = articles;
  }

  render() {
    const dom = template.render();
    const ul = dom.querySelector('ul');

    this.articles //returning undefined
      .map(article => new Article(article))
      .map(articleComponent => articleComponent.render())
      .forEach(articleDom => ul.appendChild(articleDom));

    return dom;
  }

}