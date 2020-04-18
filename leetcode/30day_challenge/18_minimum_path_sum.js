/*
Given a m x n grid filled with non-negative numbers, find a path from 
top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

var printGrid = function (grid) {
  for (row of grid) {
    console.log(row.join(" "));
  }
  console.log();
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const newGrid = Array.from({ length: rows }).map((v) =>
    new Array(cols).fill(0)
  );
  newGrid[0][0] = grid[0][0];

  for (let row = 0; row < rows; row += 1) {
    if (row > 0) newGrid[row][0] = newGrid[row - 1][0] + grid[row][0];
    for (let col = 1; col < cols; col += 1) {
      if (row === 0) {
        newGrid[row][col] = newGrid[row][col - 1] + grid[row][col];
      } else {
        newGrid[row][col] =
          Math.min(newGrid[row - 1][col], newGrid[row][col - 1]) +
          grid[row][col];
      }
    }
  }
  return newGrid[rows - 1][cols - 1];
};

// In-place implementation
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum2 = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if ((row | col) > 0) {
        if (row === 0) {
          grid[row][col] += grid[row][col - 1];
        } else if (col === 0) {
          grid[row][col] += grid[row - 1][col];
        } else {
          grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
        }
      }
    }
  }
  printGrid(grid);
  return grid[rows - 1][cols - 1];
};

var timeit = function (f, args, label) {
  console.time(label);
  result = f(args);
  console.log(`RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const grid2 = [
  [1, 90, 1, 1, 1],
  [1, 9, 1, 9, 1],
  [1, 9, 1, 9, 1],
  [1, 90, 1, 9, 1],
  [1, 1, 1, 9, 1],
];

timeit(minPathSum2, grid2, "RESULT EXPECTED: 17\t\tTime");
timeit(minPathSum2, grid1, "RESULT EXPECTED: 7\t\tTime");
