const timeit = require("../../utils/timeit");

/*

Given an array nums, write a function to move all 0's 
to the end of it while maintaining the relative order 
of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Bubble up 0s
var moveZeroes = function (nums) {
  let rightI = nums.length;

  for (let i = nums.length - 2; i >= 0; i -= 1) {
    console.log(`top of for loop - i = ${i} nums[i] = ${nums[i]}`);
    if (nums[i] === 0) {
      let j = i + 1;
      while (j < nums.length && nums[j] !== 0) {
        // swap
        nums[j - 1] = nums[j];
        nums[j] = 0;
        j += 1;
        console.log(j, nums);
      }
    }
  }

  return nums;
};

timeit(moveZeroes, [1, 3, 12, 0, 0], [0, 1, 0, 3, 12]);
