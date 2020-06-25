const timeit = require("../../utils/timeit");

/*

Given an array nums containing n + 1 integers where each integer is 
between 1 and n (inclusive), prove that at least one duplicate 
number must exist. Assume that there is only one duplicate number, 
find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be 
repeated more than once.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Solve by finding the difference between the sum and summation formula
var findDuplicate = function (nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  const n = nums.length;
  return sum - (n * (n - 1)) / 2;
};

timeit(findDuplicate, 2, [1, 3, 4, 2, 2]);
timeit(findDuplicate, 3, [3, 1, 3, 4, 2]);
