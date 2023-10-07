const image = [[0, 0, 0], [0, 0, 0]],
  sr = 0,
  sc = 0,
  color = 0;

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

  const startingColor = image[sr][sc];

  return DFS(image, sr, sc, color, startingColor, visited);
}

function DFS(
  image: number[][],
  row: number,
  col: number,
  color: number,
  startingColor: number,
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
    image[row][col] !== startingColor
  ) {
    return;
  }

  visited[row][col] = true;
  image[row][col] = color;

  DFS(image, row + 1, col, color, startingColor, visited); //go down
  DFS(image, row - 1, col, color, startingColor, visited); // go up
  DFS(image, row, col + 1, color, startingColor, visited); // go right
  DFS(image, row, col - 1, color, startingColor, visited); // go left

  return image;
}

const res = floodFill(image, sr, sc, color);
console.info("RESULT");
console.table(res);
