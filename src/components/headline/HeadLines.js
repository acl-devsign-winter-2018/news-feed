import html from './headlines.html';
import Template from '../Template';
import Api from '../../services/newsApi';
import HeadLine from './HeadLine';

const template = new Template(html);

export default class HeadLines {
  
  render() {
    const dom = template.render();
    const section = dom.getElementById('headlines');
    console.log(section);

    Api.getHeadLines()
      .then(function(data) {
        let headLines = data.articles; 
        return headLines.map(function(headLine) {
          const article = new HeadLine(headLine).render();
          section.appendChild(article);
        });
      });

    return dom;
  }
}