function twoNumberSum(array, targetSum) {
  // 1. Sort the array
  // 2. Start looping the array with 2 pointers, one at the beginner, and the other at the end
  // 3. if the sum is smaller, then increase the pointer on the left side
  // 4. else decrease the pointer on the right side
  // 5. if found, return the 2 numbers in one array

  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const sum = array[start] + array[end];
    if (sum === targetSum) return [array[start], array[end]];
    if (sum < targetSum) start++;
    else end--;
  }
  return [];
}

module.exports = twoNumberSum;
