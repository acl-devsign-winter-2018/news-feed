import html from './news-list.html';
import Template from '../Template';
import News from './News';


const template = new Template(html);

export default class NewsList {
  constructor(news) {
    this.news = news;
    console.log('newslist', this.news);
  }
  
  render() {
    const dom = template.render();
    const section = dom.querySelector('section');

    this.news
      .map(article => new News(article))
      .map(articleComponent => articleComponent.render())
      .forEach(articleDom => section.appendChild(articleDom));
    
    return dom;
  }
}