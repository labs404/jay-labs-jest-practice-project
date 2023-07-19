// importing app.js for testing.
const sum = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toEqual(3);
});


// *** added "test": "jest" to file package.json under scripts.