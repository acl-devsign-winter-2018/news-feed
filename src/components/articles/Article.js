import html from './article.html';
import './article.css';

import Template from '../Template';

export default class Article {
    constructor(data) {
        this.dom = new Template(html).clone();
        this.data = data;
    }

    buildLink() {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('href', this.data.url);
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('rel', 'noopener noreferrer' );
        return linkEl;
    }

    buildArticle() {

        // set img data
        const imgEl = this.dom.querySelector('img');
        imgEl.setAttribute('alt', this.data.title);
        if(this.data.urlToImage) 
            imgEl.setAttribute('src', this.data.urlToImage);

        // format date
        const date = this.data.publishedAt.split('T');
        this.data.publishedAt = `${date[0]} \u2014 ${date[1].slice(0, 5)}`;
        
        // set data for all fields except source, url, and urlToImg
        Object.keys(this.data).forEach(key => {
            if(!/source|url|urlToImage/.test(key))
                this.dom.getElementById(key).innerText = this.data[key];
        })

        return this.dom;
    }

    render() {
        const articleEl = this.buildLink();
        articleEl.appendChild(this.buildArticle());

        return articleEl;
    }
}