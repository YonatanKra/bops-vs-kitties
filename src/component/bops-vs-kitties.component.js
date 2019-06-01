// setup a template
import * as templateString from './bops-vs-kitties.component.html';
import * as BOP_IMAGE from '../assets/bop.png';

// setup a template element with our template
const template = document.createElement('template');
template.innerHTML = templateString;

const BOP_IMAGE_ELEMENT = new Image(50, 50);
BOP_IMAGE_ELEMENT.src = BOP_IMAGE;

export class BopsVsKitties extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.root.appendChild(template.content.cloneNode(true));
        this.canvas = this.root.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.addEventListener('click', (event) => {
            this.collisionDetection(event.offsetX, event.offsetY);
            this.drawBallOnClick(event.offsetX, event.offsetY);
        });
        this.render();
    }
    
    drawBall() {
        this.x = this.x ? this.x + 1 : 1;
        this.y = this.y ? this.y + 1 : 1;
        // add a circle
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 15, 0, Math.PI * 2); //x, y, radius, start angle, end angle
        this.ctx.fillStyle = '#0095DD'; // just fill it
        this.ctx.fill();
        this.ctx.closePath();
    }
 
    drawBallOnClick(x, y) {
        // add a circle
        this.ctx.beginPath();
        this.ctx.arc(x, y, 15, 0, Math.PI * 2); //x, y, radius, start angle, end angle
        this.ctx.fillStyle = '#0095DD'; // just fill it
        this.ctx.fill();
        this.ctx.closePath();
    }

    collisionDetection(x, y) {
        if (x < this.x + 15 && x > this.x - 15
            && y < this.y + 15 && y > this.y - 15) {
                alert('Hit!!!');
            }
    }

    render() {
        requestAnimationFrame(this.render);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw the ball
        this.drawBall();
    }
}
