import { Kittie } from './kittie';

fdescribe('Kittie', () => {
    let kittie;
    beforeEach(() => {
        kittie = new Kittie();
    });

    describe('init', () => {
        it('should setup perliminary and random x and y if given', () => {
            const positions = {
                x: 350,
                y: 250
            };
            
            expect(kittie.x).toEqual(undefined);
            expect(kittie.y).toEqual(undefined);

            kittie = new Kittie(positions.x, positions.y);

            expect(kittie.x).toEqual(positions.x);
            expect(kittie.y).toEqual(positions.y);
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
            
            kittie.position(40, 50);
            kittie.draw(canvas);
            
            expect(ctx.drawImage).toHaveBeenCalledWith(jasmine.any(Image), 40, 50, 75, 75);
        });
    });

    describe('position', () => {
        it('should setup x and y', () => {
            const positions = {
                x: 350,
                y: 250
            };
            kittie.position(positions.x, positions.y);
            expect(kittie.x).toEqual(positions.x);
            expect(kittie.y).toEqual(positions.y);
        });
    });
});