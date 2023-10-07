const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function bfsTraversal(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const queue = [];

  // Define directions for moving right and down
  const directions = [[0, 1], [1, 0]];

  // Start from the top-left corner (0, 0)
  queue.push({ row: 0, col: 0 });
  visited[0][0] = true;

  while (queue.length > 0) {
    const { row, col } = queue.shift();
    console.log(matrix[row][col]); // Output the value of the current cell

    // Explore neighbors in the right and down directions
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol]
      ) {
        queue.push({ row: newRow, col: newCol });
        visited[newRow][newCol] = true;
      }
    }
  }
}

// Call the function with the provided matrix
bfsTraversal(matrix2);
