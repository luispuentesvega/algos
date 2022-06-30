function isValidSubsequence(array, sequence) {
  // R.E.A.C.T.O
  let arrPos = 0;
  let seqPos = 0;
  let seqFound = 0;

  while (seqPos < sequence.length) {
    for (let i = arrPos; i < array.length; i++) {
      if (array[i] === sequence[seqPos]) {
        arrPos = i + 1;
        seqFound++;
        break;
      }
    }
    seqPos++;
  }
  return seqFound === sequence.length;
}

module.exports = isValidSubsequence;
