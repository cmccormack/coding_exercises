const timeit = require("../../utils/timeit");

/*
Given a non-empty array of integers, every element appears three times except 
for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement 
it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  let resultMap = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      resultMap.delete(num);
    } else {
      map.set(num, true);
      resultMap.set(num, true);
    }
  }
  return Array.from(resultMap.keys())[0];
};

timeit(singleNumber, 3, [2, 2, 3, 2]);
timeit(singleNumber, 99, [0, 1, 0, 1, 0, 1, 99]);
timeit(singleNumber, 42, [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 42]);
