// O(n) time | O(n) space where n is the length of the array
function arrayOfProducts(array) {
  // R.E.A.C.T.O
  const res = [];
  let i = 0;
  while (i < array.length) {
    //O(N)
    let j = i - 1;
    let k = i + 1;
    let left = 1;
    let right = 1;
    if (j >= 0) {
      while (j >= 0) {
        left = left * array[j];
        j--;
      }
    }

    while (k <= array.length - 1) {
      right = right * array[k];
      k++;
    }
    i++;
  }
  return res;
}
