/*
Given a 2d grid map of '1's (land) and '0's (water), count the number
 of islands. An island is surrounded by water and is formed by 
 connecting adjacent lands horizontally or vertically. You may
  assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

var printGrid = function (grid) {
  for (row of grid) {
    console.log(row.join(" "));
  }
  console.log();
};

var getNeighbor = function (arr, [row, col]) {
  if (row < 0 || row >= arr.length) {
    return null;
  }
  if (col < 0 || col >= arr[0].length) {
    return null;
  }
  return arr[row][col];
};

var updateNeighbors = function (arr, [row, col], np) {
  // printGrid(arr);
  for (let [x, y] of np) {
    let [newX, newY] = [row + x, col + y];
    neigh = getNeighbor(arr, [newX, newY]);
    // console.log(`row: ${newX} col: ${newY} neigh: ${neigh}`);
    if (neigh === "1") {
      arr[row][col] = "X";
      arr[newX][newY] = "X";
      updateNeighbors(arr, [newX, newY], np);
    }
  }
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let count = 0;
  const neighborPos = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === "1") {
        count += 1;
        updateNeighbors(grid, [row, col], neighborPos);
      }
      // printGrid(grid);
    }
  }
  // console.log(count);
  return count;
};

var timeit = function (f, args, label) {
  console.time(label);
  result = f(args);
  console.log(`RESULT: ${result}`);
  console.timeEnd(label);
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
const grid3 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

const grid4 = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];
timeit(numIslands, grid1, "SHOULD BE: 1");
timeit(numIslands, grid2, "SHOULD BE: 3");
timeit(numIslands, [], "SHOULD BE: 0");
timeit(numIslands, grid3, "SHOULD BE: 1");
timeit(numIslands, grid4, "SHOULD BE: 1");
