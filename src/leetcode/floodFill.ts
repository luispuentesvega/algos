const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
  sr = 1,
  sc = 1,
  color = 2;

console.table(image);

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  // traverse the array using DFS
  // if it has 0, stop there

  const visited = Array.from({ length: image.length }, () =>
    Array.from({ length: image[0].length }, () => false)
  );

  return DFS(image, sr, sc, color, visited);
}

function DFS(
  image: number[][],
  row: number,
  col: number,
  color: number,
  visited: boolean[][]
) {
  const h = image.length;
  const l = image[0].length;

  if (
    row < 0 ||
    row >= h ||
    col < 0 ||
    col >= l ||
    visited[row][col] ||
    image[col][row] === 0
  ) {
    return;
  }

  visited[row][col] = true;
  image[row][col] = color;

  DFS(image, row + 1, col, color, visited); //go down
  DFS(image, row - 1, col, color, visited); // go up
  DFS(image, row, col + 1, color, visited); // go right
  DFS(image, row, col - 1, color, visited); // go left

  return image;
}

const res = floodFill(image, sr, sc, color);
console.info("RESULT");
console.table(res);
