const timeit = require("../../utils/timeit");
/*
Contiguous Array

Given a binary array, find the maximum length of a contiguous subarray 
with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000. 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const counter = { 0: -1 };
  let max = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    count = nums[i] === 1 ? count + 1 : count - 1;

    if (count in counter) {
      max = Math.max(max, i - counter[count]);
    } else {
      counter[count] = i;
    }
  }
  return max;
};

timeit(findMaxLength, 2, [0, 1]);
timeit(findMaxLength, 2, [0, 1, 0]);
timeit(findMaxLength, 4, [1, 1, 0, 0, 1, 1]);
timeit(findMaxLength, 2, [0, 0, 1]);
