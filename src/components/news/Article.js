import html from './article.html';
import './article.css';
import Template from '../Template';

const template = new Template(html);

export default class Article {
    constructor(article) {
        this.article = article.articles;
    }

    render() {
        const dom = template.render();
        const article = this.article;

        dom.querySelector('.title').textContent = article.title;
        dom.querySelector('.author').textContent = article.author;
        dom.querySelector('.publisher').textContent = article.publisher;
        dom.querySelector('.publishedDate').textContent = article.publishedDate;
        dom.querySelector('.description').textContent = article.description;
        
    }
}