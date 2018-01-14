import html from './app.html';
import './app.css';
import Template from '../Template';

const template = new Template(html);

export default class App {
  render() {
    return template.render();
  }
}