const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('polybius()', () => {
    it('should encode input properly', () => {
        let actual = polybius('message', enode = true);
        let expected = '23513434112251';
        expect(actual).to.equal(expected);
    });
    it('should decode input properly', () => {
        let actual = polybius('42421551', encode = false)
        let expected = '(j/i)(j/i)ve'
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces', () => {
        let actual = polybius('3242 12421551')
        let expected = 'hi there'
    });
    it('should return false if length of all numbers is odd', () => {
        let actual = polybius('235134348 2351', encode = false)
        let expected = false;
        expect(actual).to.equal(expected);
    })
})