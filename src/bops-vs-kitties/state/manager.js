import { Entity } from '../entity/entity';
import * as BOP_IMAGE from '../../assets/bop.png';
 
const BOP_IMAGE_ELEMENT = new Image(75, 75);
BOP_IMAGE_ELEMENT.src = BOP_IMAGE;

export class StateManager {
    constructor() {
        this.kitties = [];
        this.bops = [];
    }

    spawn(xMax, yMax) {
        const spawnBop = Math.random() <= 0.25;
        const x = StateManager.generateCoordinatesInRange(xMax);
        const y = StateManager.generateCoordinatesInRange(yMax);
        if (spawnBop) {
            return this.bops[this.bops.push(new Entity(x, y, BOP_IMAGE_ELEMENT))-1];
        }

        return this.kitties[this.kitties.push(new Entity(x, y, BOP_IMAGE_ELEMENT))-1];
    }

    remove(entity) {
        const bopIndex = this.bops.indexOf(entity);
        if (bopIndex > -1) {
            return this.bops.splice(bopIndex, 1);
        }
        const kittieIndex = this.kitties.indexOf(entity);
        if (kittieIndex > -1) {
            this.kitties.splice(kittieIndex, 1);
        }
    }

    findEntityByCoordinates(coordinates) {
        const bop = this.bops.filter((item) => item.x+75 >= coordinates.x && item.x <= coordinates.x && item.y+75 >= coordinates.y && item.y<=coordinates.y)[0];
        if (bop) {
            return {
                index: this.bops.indexOf(bop),
                type: 'bop'
            }
        }
        const kittie = this.kitties.filter((item) => item.x+75 >= coordinates.x && item.x <= coordinates.x && item.y+75 >= coordinates.y && item.y<=coordinates.y)[0];
        if (kittie) {
            return {
                index: this.kitties.indexOf(kittie),
                type: 'kittie'
            }
        }
    }
    
    static generateCoordinatesInRange(max) {
        return Math.random() * max;
    }
}