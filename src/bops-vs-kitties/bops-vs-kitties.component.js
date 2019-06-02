// setup a template
import * as templateString from './bops-vs-kitties.component.html';
import { StateManager } from './state/manager';

// setup a template element with our template
const template = document.createElement('template');
template.innerHTML = templateString;

export class BopsVsKitties extends HTMLElement {
    constructor() {
        super();

        this.stateManager = new StateManager();

        this.root = this.attachShadow({mode: 'open'});
        this.root.appendChild(template.content.cloneNode(true));
        this.canvas = this.root.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.setHandlers();
        this.spawnEntities();
        this.render();
    }

    setHandlers() {
        this.canvas.addEventListener('click', (e) => {
            const coordinates = {
                x: e.offsetX,
                y: e.offsetY
            };

            const clicked = this.stateManager.findEntityByCoordinates(coordinates);
            if (clicked.type === 'kittie') {
                alert('Boom');
            }
            this.stateManager.remove(this.stateManager[clicked.type + 's'][clicked.index]);
        });
        this.canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const coordinates = {
                x: e.offsetX,
                y: e.offsetY
            }

            const clicked = this.stateManager.findEntityByCoordinates(coordinates);
            if (clicked.type === 'bop') {
                alert('Boomer');
            }
            this.stateManager.remove(this.stateManager[clicked.type + 's'][clicked.index]);
        });
    }
    spawnEntities() {
        setInterval(() => {
            this.stateManager.spawn(this.canvas.width, this.canvas.height);
        }, 1000);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        requestAnimationFrame(() => this.render());
        this.stateManager.kitties.forEach(item => item.draw(this.canvas));
        this.stateManager.bops.forEach(item => item.draw(this.canvas));
    }
}
