const arr = [10, 3, 2, 1, 1, 8];

const bubbleSort = (arr) => {
  let noSwaps;

  // pointer interating from right to left
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // move pointer from left to right
    for (let j = 0; j < i - 1; j++) {
      // compare the two pointers

      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
};

bubbleSort(arr);
console.log(arr);
