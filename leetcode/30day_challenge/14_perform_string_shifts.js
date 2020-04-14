/*

You are given a string s containing lowercase English letters, and 
a matrix shift, where shift[i] = [direction, amount]:

    direction can be 0 (for left shift) or 1 (for right shift). 
    amount is the amount by which string s is to be shifted.
    A left shift by 1 means remove the first character of s and append 
    it to the end.
    Similarly, a right shift by 1 means remove the last character of s and 
    add it to the beginning.

Return the final string after all operations.

 

Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"

Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

 

Constraints:

    1 <= s.length <= 100
    s only contains lower case English letters.
    1 <= shift.length <= 100
    shift[i].length == 2
    0 <= shift[i][0] <= 1
    0 <= shift[i][1] <= 100


    abcdef
    length = 6
    left = 2 (cdefab)
    right = 5 (defabc)
    left - right = -3 (abcdef becomes defabc)
*/

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  const shiftMap = new Map();
  shiftMap.set(0, 0);
  shiftMap.set(1, 0);
  for ([dir, amt] of shift) {
    shiftMap.set(dir, (shiftMap.get(dir) + amt) % s.length);
  }
  const diff = shiftMap.get(0) - shiftMap.get(1);
  const result = s.slice(diff) + s.slice(0, diff);
  return result;
};

console.assert(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ]) === "cab",
  "Borked!"
);
console.assert(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ]) === "efgabcd",
  "Borked!"
);
console.assert(
  stringShift("xqgwkiqpif", [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ]) === "qpifxqgwki",
  "Borked!"
);
