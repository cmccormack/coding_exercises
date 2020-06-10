const timeit = require("../../utils/timeit");

/*

Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Utilizing binary search
var searchInsert = function (nums, target) {

  if (target > nums[nums.length - 1]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  let mid = (left + right) >> 1;
  console.log(nums, target);
  while (left <= right) {
    console.log(`new mid = ${mid}, left = ${left}, right = ${right}`);
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = (left + right) >> 1;
  }
  console.log(mid, left, right);
  return target > nums[mid] ? right + 1 : left;
};

// Utilizing for loop
var searchInsert_2 = function (nums, target) {
  const numLen = nums.length;
  if (target > nums[numLen - 1]) return numLen;
  for (let i = 0; i < numLen; i +=1) {
    if (nums[i] >= target) return i;
  }
};

timeit(searchInsert, 2, [1, 3, 5, 6], 5);
timeit(searchInsert, 1, [1, 3, 5, 6], 2);
timeit(searchInsert, 4, [1, 3, 5, 6], 7);
timeit(searchInsert, 0, [1, 3, 5, 6], 0);
timeit(searchInsert, 0, [1], 1);
