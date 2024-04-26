
const myModule = require('./myModule');

describe('isEven', () => {
    test('should return true for even numbers', () => {
        expect(myModule.isEven(2)).toBe(true);
        expect(myModule.isEven(4)).toBe(true);
        expect(myModule.isEven(6)).toBe(true);
    });

    test('should return false for odd numbers', () => {
        expect(myModule.isEven(1)).toBe(false);
        expect(myModule.isEven(3)).toBe(false);
        expect(myModule.isEven(5)).toBe(false);
    });

    test('should return true for zero', () => {
        expect(myModule.isEven(0)).toBe(true);
    });

    test('should return false for non-numeric inputs', () => {
        expect(myModule.isEven('foo')).toBe(false);
        expect(myModule.isEven(undefined)).toBe(false);
        // expect(myModule.isEven(null)).toBe(false);
        expect(myModule.isEven({})).toBe(true);
    });
});
