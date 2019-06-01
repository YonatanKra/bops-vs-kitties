import * as BOP_IMAGE from '../../../assets/bop.png';
 
const BOP_IMAGE_ELEMENT = new Image(50, 50);
BOP_IMAGE_ELEMENT.src = BOP_IMAGE;

export class Bop {
    constructor(x, y) {
        this.position(x, y);
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(BOP_IMAGE_ELEMENT, this.x, this.y, 75, 75);
    }

    position(x, y) {
        this.x = x;
        this.y = y;
    }
}