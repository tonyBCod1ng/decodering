const expect = require("chai").expect;
const sub = require('../src/substitution');
describe('substitution()', () => {
    describe('it should return false if', () => {
        it('alphabet is not exactly 26 characters', () => {
            let expected = false;
            let actual = sub('hello', 'a.ruy', encode = true);
            expect(actual).to.equal(expected);
        });
        it('alphabet does not contain 26 unique characters', () => {
            let expected = false;
            let actual = sub('hello', 'aacdefghijklmnopqrstuvwxyy', encode = true);
            expect(actual).to.equal(expected);
        });
    });
    it('should maintain spaces', () => {
        let expected = 'mess age';
        let actual = sub('ykrr pik', 'plmoknijbuhvygctfxrdzeswaq', encode = false);
        expect(actual).to.equal(expected);
    });
    it('should ignore capital letters', () => {
        let expected = 'mess age';
        let actual = sub('Ykrr pik', 'plmoknijbuhvygctfxrdzeswaq', encode = false);
        expect(actual).to.equal(expected);
    })
})