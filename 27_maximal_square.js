/*

Given a 2D binary matrix filled with 0's and 1's, find the largest square 
containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4


*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  let squares = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      // Loose comparison because why not
      if (matrix[row][col] == "1") {
        if (row == "0" || col == "0") {
          squares = Math.max(squares, 1);
        } else {
          const left = matrix[row][col - 1];
          const top = matrix[row - 1][col];
          const topLeft = matrix[row - 1][col - 1];
          matrix[row][col] = 1 + Math.min(left, topLeft, top);
          squares = Math.max(matrix[row][col], squares);
        }
      }
    }
  }
  return squares ** 2;
};

const br = `\n---------------------------------------------\n`;
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

const in1 = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
const in2 = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "1", "1", "1"],
];
timeit(`RESULT EXPECTED: 4\t\tTime`, maximalSquare, in1);
timeit(`RESULT EXPECTED: 9\t\tTime`, maximalSquare, in2);
timeit(`RESULT EXPECTED: 1\t\tTime`, maximalSquare, [["1"]]);
timeit(`RESULT EXPECTED: 1\t\tTime`, maximalSquare, [["0", "1"]]);
