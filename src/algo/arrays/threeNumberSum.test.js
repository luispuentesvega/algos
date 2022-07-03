const threeNumberSum = require('./threeNumberSum');

it('should find 3 outputs for the given array and targetSum', () => {
  expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
});
