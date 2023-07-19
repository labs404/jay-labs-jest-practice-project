const multiply = require('./multiply');

test('multiply 7 times 9 to equal 63', () => {
    expect(multiply(7,9)).toEqual(63);
});