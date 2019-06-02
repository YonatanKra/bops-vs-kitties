export class Entity {
    constructor(x, y, image) {
        this.image = image;
        this.position(x, y);
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        if (this.size < 75) {
            this.size++;
        }
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }

    position(x, y) {
        this.x = x;
        this.y = y;
        this.size = 0;
    }
}