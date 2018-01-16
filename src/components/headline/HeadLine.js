import html from './headline.html';
import Template from '../Template';

const template = new Template(html);

export default class HeadLine {
  constructor(headLine){
    this.headLine = headLine;
  }
  
  render() {
    const dom = template.render();
    dom.querySelector('.title').textContent = this.headLine.title;
    dom.querySelector('.author').textContent =  this.headLine.author;
    dom.querySelector('.publisher').textContent = this.headLine.source.name;
    dom.querySelector('.publishedAt').textContent = this.headLine.publishedAt;
    dom.querySelector('.description').textContent = this.headLine.description;
    dom.querySelector('.url').setAttribute('href', this.headLine.url);

    const img = dom.querySelector('.thumbnail');
    if(this.headLine.urlToImage) {
      img.setAttribute('src', this.headLine.urlToImage);
      img.setAttribute('alt', `${this.headLine.title} by ${this.headLine.author}`);
    } 
    else{
      img.classList.add('hidden');
    }

    return dom;
  }
}