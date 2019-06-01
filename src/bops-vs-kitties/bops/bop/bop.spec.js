import { Bop } from './bop';

describe('Bop', () => {
    let bop;
    beforeEach(() => {
        bop = new Bop();
    });

    describe('init', () => {
        it('should setup perliminary and random x and y if given', () => {
            const positions = {
                x: 350,
                y: 250
            };
            
            expect(bop.x).toEqual(undefined);
            expect(bop.y).toEqual(undefined);

            bop = new Bop(positions.x, positions.y);

            expect(bop.x).toEqual(positions.x);
            expect(bop.y).toEqual(positions.y);
        });
    });

    describe('draw', () => {
        it('should draw itself on given canvas', () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            spyOn(ctx, 'drawImage').and.callFake(() => {
                return true;
            });
            canvas.height = 500;
            canvas.width = 400;
            
            bop.position(40, 50);
            bop.draw(canvas);
            
            expect(ctx.drawImage).toHaveBeenCalledWith(jasmine.any(Image), 40, 50, 75, 75);
        });
    });

    describe('position', () => {
        it('should setup x and y', () => {
            const positions = {
                x: 350,
                y: 250
            };
            bop.position(positions.x, positions.y);
            expect(bop.x).toEqual(positions.x);
            expect(bop.y).toEqual(positions.y);
        });
    });
});