const twoNumberSum = require('./twoNumberSum');

const arr = [1, 10, 6, 8, 9, 10, 20];
const target = 17;

test('should return [8,9] when searching 17 in array', () => {
  expect(twoNumberSum(arr, target)).toEqual([8, 19]);
});
