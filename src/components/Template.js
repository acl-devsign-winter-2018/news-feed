
export default class Template {
  constructor(html) {
    const template =  document.createElement('templarte');
    template.innerHTML = html;
    this.template = template.content;
  }

  render() {
    return this.template.coneNode(true);
  }
}