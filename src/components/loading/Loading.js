import html from './loading.html';
import './loading.css';

import Template from '../Template';


export default class Loading {
    constructor() {
        this.dom = new Template(html).clone();
    }

    render() {
        return this.dom;
    }
}