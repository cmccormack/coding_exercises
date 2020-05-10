const timeit = require("../../utils/timeit");

/*

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

*/
// Solution for large values of num
var isPerfectSquare_large = function (num) {
  let n = (num / 2 + 0.5) << 0;
  let nsquared = n * n;

  while (nsquared > num) {
    n = (n / 2 + 0.5) << 0;
    nsquared = n * n;
  }

  while (nsquared < num) {
    n += 1;
    nsquared = n * n;
  }
  return nsquared === num;
};

// Solution for small values of num
var isPerfectSquare = function (num) {
  let n = 1;
  let nsquared = n * n;
  while (nsquared < num) {
    n += 1;
    nsquared = n * n;
  }
  return nsquared === num;
};

timeit(isPerfectSquare, true, 1);
timeit(isPerfectSquare, true, 16);
timeit(isPerfectSquare, true, 4);
timeit(isPerfectSquare, false, 6);
timeit(isPerfectSquare, false, 12);
timeit(isPerfectSquare, true, 81);
