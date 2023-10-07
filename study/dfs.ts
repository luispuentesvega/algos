const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(matrix);

function DFS(grid: number[][], row: number, col: number, visited: boolean[][]) {
  let h = grid.length;
  let l = grid[0].length;

  if (row < 0 || col < 0 || row >= h || col >= l || visited[row][col]) {
    return;
  }

  // mark the cell as visited
  visited[row][col] = true;
  console.log(`[${row}][${col}]`, grid[row][col]);
  DFS(grid, row + 1, col, visited); // go right
  DFS(grid, row - 1, col, visited); // go left
  DFS(grid, row, col + 1, visited); // go down
  DFS(grid, row, col - 1, visited); // go up
}

let h = matrix.length;
let l = matrix[0].length;
const visited: boolean[][] = Array.from({ length: h }, () => {
  return Array.from({ length: l }, () => false);
});
DFS(matrix, 0, 0, visited);

/*


    public void DFSUtil(int[][] grid, int row, int col, boolean[][] visited) {

        int H = grid.length;
        int L = grid[0].length;

        if (row < 0 || col < 0 || row >= H || col >= L || visited[row][col])
            return;

        //mark the cell visited
        visited[row][col] = true;
        System.out.print(grid[row][col] + " ");
        DFSUtil(grid, row+ 1, col,visited); // go right
        DFSUtil(grid, row- 1, col,visited); //go left
        DFSUtil(grid, row, col + 1,visited); //go down
        DFSUtil(grid, row, col - 1,visited); // go up
    }

*/
