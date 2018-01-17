import html from './search.html';
import './search.css';

import Template from '../../Template';


export default class Search {
    constructor(onSearch) {
        this.dom = new Template(html).clone();
        this.onSearch = onSearch;
    }
    
    handleSearch(pageChange) {
        let page = this.pageSelectEl.value;
        if(pageChange) {
            page = pageChange === 'prev' ? +page - 1 : +page + 1;
            this.pageSelectEl.value = page;
        }

        const searchParams = {
            searchTerms: this.searchInputEl.value,
            sortBy: this.sortByEl.value,
            todayOnly: this.todayOnlyEl.checked,
            page: page === '' ? 1 : page
        }

        console.log(searchParams)
        this.onSearch(searchParams);
    }

    render() {
        this.searchInputEl = this.dom.getElementById('search-bar-input');
        this.sortByEl = this.dom.getElementById('sort-by');
        this.todayOnlyEl = this.dom.getElementById('today-only');
        this.pageSelectEl = this.dom.getElementById('page-select');

        this.searchInputEl.addEventListener('keydown', e => e.key === 'Enter' && this.handleSearch())
        this.dom.querySelector('#search-bar button').addEventListener('click', () => this.handleSearch())
        this.pageSelectEl.addEventListener('change', () => this.handleSearch())
        this.dom.getElementById('prev-page').addEventListener('click', () => this.handleSearch('prev'));
        this.dom.getElementById('next-page').addEventListener('click', () => this.handleSearch('next'));


        return this.dom;
    }
}