// setup a template
import * as templateString from './bops-vs-kitties.component.html';

// setup a template element with our template
const template = document.createElement('template');
template.innerHTML = templateString;

export class BopsVsKitties extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.root.appendChild(template.content.cloneNode(true));
        this.canvas = this.root.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    render() {
        requestAnimationFrame(() => this.render());
    }
}
