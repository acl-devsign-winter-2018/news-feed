import html from './error.html';
import './error.css';

import Template from '../Template';


export default class ErrorDisplay {
    constructor(message) {
        this.dom = new Template(html).clone();
        this.message = message;
    }

    render() {
        this.dom.getElementById('error-message').innerText = this.message;
        return this.dom;
    }
}