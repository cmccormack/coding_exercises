const timeit = require("../../utils/timeit");

/*

Given a 2D board containing 'X' and 'O' (the letter O), capture all 
regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that 
surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that 
any 'O' on the border of the board are not flipped to 'X'. Any 'O' 
that is not on the border and it is not connected to an 'O' on the 
border will be flipped to 'X'. Two cells are connected if they are 
adjacent cells connected horizontally or vertically.

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || board.length === 0) return null;

  const rows = board.length;
  const cols = board[0].length;
  const neighbors = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // Check left and right borders
  for (let row = 0; row < rows; row += 1) {
    if (board[row][0] === "O") dfs(board, row, 0, neighbors);
    if (board[row][cols - 1] === "O") dfs(board, row, cols - 1, neighbors);
  }

  // Check top and bottom borders
  for (let col = 0; col < cols; col += 1) {
    if (board[0][col] === "O") dfs(board, 0, col, neighbors);
    if (board[rows - 1][col] === "O") dfs(board, rows - 1, col, neighbors);
  }

  function dfs(board, row, col, neighbors) {
    // Set null placeholder for edge 'O'
    board[row][col] = null;

    // Iterate over neighbors and recursively modify neighboring 'O's
    for (let [y, x] of neighbors) {
      if (row + y > 0 && row + y < board.length) {
        if (col + x > 0 && col + x < board[0].length) {
          if (board[row + y][col + x] === "O") {
            dfs(board, row + y, col + x, neighbors);
          }
        }
      }
    }
  }

  // Finalize board by replacing null with X

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      }
      if (board[row][col] === null) {
        board[row][col] = "O";
      }
    }
  }
  return board;
};

const test1 = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

const expected1 = [
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
];

timeit(solve, expected1, test1);
