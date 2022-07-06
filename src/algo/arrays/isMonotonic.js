// time: O(n)
// space: O(1)
function isMonotonic(arr) {
  if (arr.length <= 1) {
    return true;
  }

  console.log(arr);
  // R.E.A.C.TO

  // Loop the array
  // identify if the array increase or decrease
  // store the value and keep checking if keep increasing or decreasing
  // if increase and decrese or viceversa, then return false
  let direction = '';
  for (let i = 0; i < arr.length - 1; i++) {
    current = arr[i];
    next = arr[i + 1];
    if (direction === '') {
      if (current > next) {
        direction = 'decrease';
      } else if (current < next) {
        direction = 'increase';
      }
    } else {
      if (direction === 'decrease' && current < next) {
        return false;
      } else if (direction === 'increase' && next < current) {
        return false;
      }
    }
  }

  if (direction === '') return true;
  return true;
}

const arr = [1, 5, 10, 1100, 1101, 1102, 9001];
console.log(isMonotonic(arr));
