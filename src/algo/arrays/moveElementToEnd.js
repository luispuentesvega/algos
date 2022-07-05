function moveElementToEnd(array, toMove) {
  // R.E.A.C.T.O
  array.sort((a, b) => a - b);
  let start = array.indexOf(toMove);
  let end = array.lastIndexOf(toMove);

  if (start === -1 || end === -1) return array;

  let posToMove = array.length - 1;
  while (start <= end) {
    if (array[posToMove] != toMove) {
      array[start] = array[posToMove];
      array[posToMove] = toMove;
    }
    posToMove--;
    start++;
  }
  return array;
}

const array = [1, 2, 4, 5, 6];
const toMove = 3;
moveElementToEnd(array, toMove);
