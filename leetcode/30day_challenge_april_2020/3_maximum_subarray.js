const timeit = require("../../utils/timeit");
/*

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum 
and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding 
another solution using the divide and conquer approach, 
which is more subtle.

[-2, 1, -3, 4, -1, 2, 1, -5, 4]
 -2, -1,-4, 0, -1, 1, 2, -3, 1]

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// Brute force approach
var maxSubArray_1 = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j += 1) {
      currentSum += nums[j];
      max = Math.max(currentSum, max);
    }
  }
  return max;
};

var maxSubArray = function (nums) {
  if (!nums || nums.length === 0) return 0;
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    max = Math.max(nums[i], max);
  }

  return max;
};

timeit(maxSubArray, 6, [-2, 1, -3, 4, -1, 2, 1, -5, 4]);
