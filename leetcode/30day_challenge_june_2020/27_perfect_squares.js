const timeit = require("../../utils/timeit");

/*
Given a positive integer n, find the least number of perfect square numbers 
(for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */
// INCOMPLETE
var numSquares = function (n) {
  if (!n) return 0;

  // get all perfect squares <= n
  const perfect_squares = [];
  let i = 1;
  let squared = i ** 2;
  while (squared <= n) {
    perfect_squares.push(squared);
    i += 1;
    squared = i ** 2;
  }

  // decrement n by highest perfect square until n === 0
  let lastI = perfect_squares.length - 1;
  console.log(n);
  while (n > 0) {
    console.log(n, perfect_squares[lastI]);
    if (n < perfect_squares[lastI]) {
      lastI -= 1;
    } else {
      n -= perfect_squares[lastI];
    }
  }

  console.log(n);

  //
};

timeit(numSquares, 3, 12);
timeit(numSquares, 2, 13);
