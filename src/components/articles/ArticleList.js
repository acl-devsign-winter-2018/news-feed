import html from './article-list.html';
import './article.css';

import Template from '../Template';
import Article from './Article';


export default class ArticleList {
    constructor(data) {
        this.dom = new Template(html).clone();
        this.data = data;
    }

    buildArticleSection() {
        const articleSection = this.dom.getElementById('articles');
        this.data.forEach(data => {
            articleSection.appendChild(new Article(data).render());
        })
        return articleSection;
    }

    render() {
        this.dom.appendChild(this.buildArticleSection())
        return this.dom;
    }
}