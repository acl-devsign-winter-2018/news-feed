import html from './news-feed.html';
import Template from '../Template';
import News from './News';

const template = new Template(html);

export default class NewsFeed {
  constructor(news) {
    this.news = news;
    
  }
  render() {
    const dom = template.render();
    const ul = dom.querySelector('ul');
   
    this.news
      .map(news => new News(news))
      .map(newsComponent => newsComponent.render())
      .forEach(newsDom => ul.appendChild(newsDom));
    return dom;
  }
  
}