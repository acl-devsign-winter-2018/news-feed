import html from './article-list.html';
import Article from './Article';
import Template from '../Template';

const template = new Template(html);

export default class ArticleList {
  constructor(articlesConstructor) {
    this.articlesConstructor = articlesConstructor;
  }

  render() {
    const dom = template.render();
    const ul = dom.querySelector('ul');

    this.articlesConstructor
      .map(article => new Article(article))
      .map(articleComponent => articleComponent.render())
      .forEach(articleDom => ul.appendChild(articleDom));

    return dom;
  }
}