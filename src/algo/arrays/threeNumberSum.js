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
