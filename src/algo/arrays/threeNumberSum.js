// time: O(n^2) -> where n is the length of the array
// space: O(n) -> n is equals to lenght of the array
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let start = i + 1;
    let end = array.length;
    while (start < end) {
      const currentSum = currentNum + array[start] + array[end];
      if (currentSum === targetSum) {
        res.push([currentNum, array[start], array[end]]);
      }
      if (currentSum <= targetSum) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
}

module.exports = threeNumberSum;
