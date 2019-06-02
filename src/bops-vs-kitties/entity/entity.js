export class Entity {
    constructor(x, y, image) {
        this.image = image;
        this.position(x, y);
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.image, this.x, this.y, 75, 75);
    }

    position(x, y) {
        this.x = x;
        this.y = y;
    }
}