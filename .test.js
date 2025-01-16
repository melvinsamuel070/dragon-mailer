// .test.js
const sum = require('./sum') // Import the sum function from sum.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3) // Test for the sum function
})
