const timeit = require("../../utils/timeit");

/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects
 of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and 
blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite
 array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Using dutch national flag algorithm
var sortColors = function (nums, mid = 1) {
  let i = 0;
  let j = 0;
  let len = nums.length;
  let temp;

  while (j < len) {
    if (nums[j] < mid) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i += 1;
      j += 1;
    } else if (nums[j] > mid) {
      len -= 1;
      temp = nums[len];
      nums[len] = nums[j];
      nums[j] = temp;
    } else {
      j += 1;
    }
  }
  return nums;
};

timeit(sortColors, [0, 0, 1, 1, 2, 2], [2, 0, 2, 1, 1, 0]);
timeit(sortColors, [2], [2]);
