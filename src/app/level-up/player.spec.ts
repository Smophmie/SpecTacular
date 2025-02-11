import {Player} from "./player";

describe('LevelUpComponent', () => {

    it('should gain 10 experience point each day', () =>{
        let player = new Player(0,0);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should win a level when experience equal 100', () => {
        let player = new Player(0,100);
        player.newDay();
        expect(player.level).toBe(1);
    });

    it('should keep the same level', () => {
        let player = new Player(10,10);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('max level should be 10', () => {
        let player = new Player(10,100);
        player.newDay();
        expect(player.level).toBeLessThanOrEqual(10);
    });

    it('should have a level strictly inferior to 11', () => {
        let player = new Player(10,10);
        player.newDay();
        expect(player.level).toBeLessThan(11);
    });

    it('should never have initial experience very high', () => {
        let player = new Player(0,300);
        player.newDay();
        expect(player.experience).not.toBeLessThanOrEqual(100);
    });

    it('should never have negative experience', () =>{
        let player = new Player(10,-10);
        player.newDay();
        expect(player.experience).toBeGreaterThanOrEqual(0);
    });

    it('should never have negative level', () =>{
        let player = new Player(-10,10);
        player.newDay();
        expect(player.level).toBeGreaterThanOrEqual(0);
    });

    it('experience and level should be a valid number', () => {
        const player = new Player(1, 50);

        expect(typeof player.level).toBe('number');
        expect(typeof player.experience).toBe('number');

        player.newDay();
        expect(typeof player.level).toBe('number');
        expect(typeof player.experience).toBe('number');
    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
            let player = new Player(0,103);
            player.newDay();
            expect(player.experience).toBe(13);
        });
    });
})
