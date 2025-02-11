import {Player} from "./player";

describe('LevelUpComponent', () => {

    it('should start with level 0 and experience 0 by default', () => {
        let player = new Player();
        expect(player.level).toBe(0);
        expect(player.experience).toBe(0);
    });

    it('experience and level should be at 0 in case of undefined values', () => {
        let player = new Player(undefined, undefined);

        expect(player.level).toBe(0);
        expect(player.experience).toBe(0);
    });

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

    it('should keep the same level if level is 10', () => {
        let player = new Player(10,10);
        player.newDay();
        expect(player.level).toBe(10);
    });

    it('should have a max level at 10', () => {
        let player = new Player(10,100);
        player.newDay();
        expect(player.level).toBeLessThanOrEqual(10);
    });

    it('should have a level strictly inferior to 11', () => {
        let player = new Player(10,10);
        player.newDay();
        expect(player.level).toBeLessThan(11);
    });

    it('should reset negative experience to 0 and win 10 points', () =>{
        let player = new Player(0,-10);
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should reset negative level to 0', () =>{
        let player = new Player(-10,10);
        player.newDay();
        expect(player.level).toBe(0);
    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
            let player = new Player(0,203);
            player.newDay();
            expect(player.experience).toBe(13);
        });
    });
})
