
export default class Template {
    constructor(html) {
        this.template = document.createElement('template');
        this.template.innerHTML = html;
    }

    clone() {
        return this.template.content.cloneNode(true);
    }
}