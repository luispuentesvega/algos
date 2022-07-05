// time : O(N log(N) + M log(M)) where n is the length of the array
function smallestDifference(arrayOne, arrayTwo) {
  // R.E.A.C.T.O
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  const res = [arrayOne[0], arrayTwo[0]];

  let arrOneLength = arrayOne.length;
  let arrTwoLength = arrayTwo.length;
  let idxOne = 0;
  let idxTwo = 0;
  while (idxOne < arrOneLength || idxTwo < arrTwoLength) {
    const numOne = arrayOne[idxOne];
    const numTwo = arrayTwo[idxTwo];
    const abs = Math.abs(numOne - numTwo);
    if (abs === 0) {
      res[0] = numOne;
      res[1] = numTwo;
      break;
    }
    if (abs < Math.abs(res[0] - res[1])) {
      res[0] = numOne;
      res[1] = numTwo;
    }
    if (numOne < numTwo) {
      idxOne++;
    } else if (numTwo < numOne) {
      idxTwo++;
    } else {
      idxOne++;
      idxTwo++;
    }
  }
  return res;
}

// Do not edit the line below.

const arrayOne = [10, 0, 20, 25, 2200];
const arrayTwo = [1005, 1006, 1014, 1032, 1031];
const res = smallestDifference(arrayOne, arrayTwo);
console.log('here:', res);
