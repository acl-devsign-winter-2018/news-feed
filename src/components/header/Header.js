import html from './header.html';
import './header.css';

import Template from '../Template';
import Search from './search/Search';


export default class Header {
    constructor(onSearch) {
        this.dom = new Template(html).clone();
        this.onSearch = onSearch;
    }

    render() {
        this.dom.getElementById('search')
            .appendChild(new Search(this.onSearch).render());

        return this.dom;
    }
}