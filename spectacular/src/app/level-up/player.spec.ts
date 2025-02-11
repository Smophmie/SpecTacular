import { Player } from "./player";

describe('LevelUpComponent', () => {

    it('should gain 10 experience points each day', () => {
        let player = new Player(5, 5);
        player.newDay();
        console.log(player);
        expect(player.experience).toBe(9);
    });

    it('should start with 0 in experience and level', () => {

    })

    it('should win a level when experience equal 100', () => {
        let player = new Player(0,90);
        player.newDay();
        expect(player.level).toBe(1);
    });

    it('should keep the same level', () => {});

    it('max level should be 10', () => {});

    it('should have a level strictly inferior to 11', () => {});

    it('should never have initial experience very high', () => {});

    it('should never have negative experience', () =>{});

    it('should never have negative level', () =>{});

    it('experience and level should be a valid number', () => {});

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {});
    });
})
