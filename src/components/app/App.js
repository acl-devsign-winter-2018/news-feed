import html from './app.html';
import './app.css';

import Template from '../Template';
import Header from '../header/Header';
import ArticleList from '../articles/ArticleList';
import Loading from '../loading/Loading';
import ErrorDisplay from '../error/ErrorDisplay';

import { getTopNews, searchNews } from '../../services/newsApi.js';
import { ARTICLES_PER_PAGE } from '../../services/constants';


export default class App {
    constructor() { 
        this.dom = new Template(html).clone();
    }

    async getInitContent() {
        const res = await getTopNews('general');
        if(res.status === 'ok') this.fillArticles(res.articles);
        else if(res.status === 'error') 
            this.main.appendChild(new ErrorDisplay(res.message).render());
    }

    async handleSearch(searchParams) {
        const errDisplayEl = this.main.querySelector('#error-display');
        if(errDisplayEl) this.main.removeChild(errDisplayEl);

        try {
            this.main.appendChild(new Loading().render());
            const res = await searchNews(searchParams);

            if(res.totalResults > 0){
                this.updatePageSelectEl(res.totalResults);
                this.fillArticles(res.articles);
            }
            else
                this.main.appendChild(new ErrorDisplay('no results found').render());
            }
        catch(err) {
            this.main.appendChild(new ErrorDisplay(err.message).render());   
        }
        finally {
            this.main.removeChild(this.main.querySelector('#loading-screen'));
        }
    }


    fillArticles(articles) {
        const articlesSection = this.main.querySelector('#articles');
        if(articlesSection) this.main.removeChild(articlesSection);
        this.main.appendChild(new ArticleList(articles).render())
    }

    updatePageSelectEl(totalResults) {

        // show paging options;
        if(this.pagingEl.getAttribute('style') !== 'display: flex') this.pagingEl.setAttribute('style', 'display: flex');

        const currentPages = parseInt(this.pageSelectEl.getAttribute('data-max'));
        let numPages = Math.ceil(totalResults / ARTICLES_PER_PAGE);
        if(numPages > 50) numPages = 50;

        if(currentPages < numPages) {
            // add pages as necessary
            for(let i = currentPages + 1; i <= numPages; i++) {
                let optEl = document.createElement('option');
                optEl.setAttribute('value', i);
                optEl.innerText = i;
                this.pageSelectEl.appendChild(optEl);
                if(i === numPages) this.pageSelectEl.setAttribute('data-max', i);
            }
        }
        else {
            // remove pages as necessary
            while(parseInt(this.pageSelectEl.lastChild.value) > numPages) {
                this.pageSelectEl.removeChild(this.pageSelectEl.lastChild);
            }
        }
    }
    
    render() {
        this.getInitContent();
        const header = new Header(
            searchParams => this.handleSearch(searchParams)
        );
        
        this.dom.querySelector('header').appendChild(header.render());
        this.main = this.dom.getElementById('main');
        this.pagingEl = this.dom.getElementById('paging');
        this.pageSelectEl = this.dom.getElementById('page-select');

        return this.dom;
    }
}