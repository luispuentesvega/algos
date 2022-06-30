const isValidSubsequence = require('./isValidSubsequence');

const array = [1, 10, 6, 8, 9, 10, 20];
const sequence = [1, 6, 9];

test('should return true when sequence is found', () => {
  expect(isValidSubsequence(array, sequence)).toBe(true);
});
