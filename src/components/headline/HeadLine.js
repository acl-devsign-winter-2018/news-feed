import html from './headline.html';
import Template from '../Template';

const template = new Template(html);

export default class HeadLine {
  constructor(headLine){
    this.headLine = headLine;
  }
  
  render() {
    const dom = template.render();

    dom.querySelector('.author').textContent = this.headLine.author;

    return dom;
  }
}