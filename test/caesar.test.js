const caesar = require("../src/caesar");
const expect = require("chai").expect;
describe('ceasar()', () => {
    describe('should return false if:', () => {
        it(`shift value equal to 0`, () => {
            let shift = 0;
            let string = "E Tu Brute";
            let actual = caesar(string, shift);
            let expected = false;
            expect(actual).to.equal(expected);
        });
        it('Shift value is greater than 25', () => {
            let shift = 26;
            let string = "E Tu Brute";
            let actual = caesar(string, shift);
            let expected = false;
            expect(actual).to.equal(expected);
        });
        it('Shift value is less than -25', () => {
            let shift = -26;
            let string = "E Tu Brute";
            let actual = caesar(string, shift);
            let expected = false;
            expect(actual).to.equal(expected);
        });
    }); 
    it('should ignore capitalization', () => {
        let shift = 3;
        let string = "Hi There"
        let expected = "kl wkhuh";
        let actual = caesar(string, shift);
        expect(actual).to.equal(expected);
    });
    it('should cycle through alphabet when shifting right of z', () => {
        let shift = 3;
        let string = "z";
        let actual = caesar(string, shift);
        let expected = "c";
        expect(actual).to.equal(expected);
    });
    it('should cycle through alphabet when shifting left of a', () => {
        let shift = -3;
        let string = "a";
        let actual = caesar(string, shift);
        let expected = "x";
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces and other nonalphabetic symbols in the message', () => {
        let shift = 3;
        let string = "a b!";
        let expected = "d e!";
        let actual = caesar(string, shift);
        expect(actual).to.equal(expected);
    });
    it('should decode properly', () => {
        let actual = caesar('hey!', 3, encode = false);
        let expected = 'ebv!';
        expect(actual).to.equal(expected);
    })
})