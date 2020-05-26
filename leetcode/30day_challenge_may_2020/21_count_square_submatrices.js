const timeit = require("../../utils/timeit");

/*

Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.

 

Constraints:

    1 <= arr.length <= 300
    1 <= arr[0].length <= 300
    0 <= arr[i][j] <= 1


*/
const printMatrix = (matrix) => matrix.map((m) => console.log(m));
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from({ length: rows }).map((v) => new Array(cols).fill(0));
  let result = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      dp[row][col] = matrix[row][col];
      if (row && col && matrix[row][col]) {
        dp[row][col] =
          Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row][col - 1]) +
          1;
      }
      result += dp[row][col];
    }
  }
  return result;
};

const matrix1 = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
const matrix2 = [
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
];
timeit(countSquares, 15, matrix1);
timeit(countSquares, 7, matrix2);
