import { Player } from "./player";

describe('LevelUpComponent', () => {

    xit('should gain 10 experience points each day', () => {
        let player = new Player(5, 5);
        player.newDay();
        console.log(player);
        expect(player.experience).toBe(9);
    });

    xit('should start with 0 in experience and level', () => {

    })

    xit('should win a level when experience equal 100', () => {
        let player = new Player(0,90);
        player.newDay();
        expect(player.level).toBe(1);
    });

    xit('should keep the same level', () => {});

    xit('max level should be 10', () => {});

    xit('should have a level strictly inferior to 11', () => {});

    xit('should never have initial experience very high', () => {});

    xit('should never have negative experience', () =>{});

    xit('should never have negative level', () =>{});

    xit('experience and level should be a valid number', () => {});

    describe('experience excess', () => {
        xit('should keep the experience excess after level up', () => {});
    });
})
