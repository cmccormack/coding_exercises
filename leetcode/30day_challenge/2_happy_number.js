// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process:
//   Starting with any positive integer, replace the number by the sum of the
//   squares of its digits, and repeat the process until the number equals 1
//   (where it will stay), or it loops endlessly in a cycle which does not
//   include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example:

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = {};
  if (n < 1) return false;

  while (n !== 1) {
    let sum = 0;
    while (n >= 1) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (n === 1) return true;
    if (seen[sum]) {
      return false;
    }
    seen[sum] = true;
    n = sum;
  }
  return true;
};

console.log(isHappy(19));
console.log(isHappy(1));
console.log(isHappy(14));
