/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4


Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3      3 2 1

7 [1,-1,o1,*1,1,1,1] 4 2 1
9 [1,1,-1,o1,*1,1,1,1,1] 5 2 1
11 [1,1,-1,1,1,*1,1,1,1,1,1] 6 3 2 1
13 [2,2,2,-2,o2,^2,*2,2,2,2,2,2,2] 7 3 2 1
15 [2,2,2,-2,2,2,2,*2,2,2,2,2,2,2,2] 8 4 2 1
17 [3,3,3,3,-3,3,3,3,*3,3,3,3,3,3,3,3,3] 9 4 3 2 1
Output: -1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const numLen = nums.length;
  let leftI = 0;
  let rightI = numLen - 1;

  // Solve using iterative approach
  while (leftI <= rightI) {
    // Find current middle index
    midI = ~~(leftI + (rightI - leftI) / 2);

    if (nums[midI] === target) return midI;

    // If left item is greater than mid check other side first
    if (nums[leftI] > nums[midI]) {
      // Check if target between middle and right indices
      if (nums[midI] < target && target <= nums[rightI]) {
        leftI = midI + 1;
      } else {
        // target not on right side
        rightI = midI - 1;
      }
    } else {
      // Check if target between left and middle indices
      if (nums[leftI] <= target && target < nums[midI]) {
        rightI = midI - 1;
      } else {
        // target not on left side
        leftI = midI + 1;
      }
    }
  }

  return -1;
};

var timeit = function (label, f, args) {
  console.time(label);
  console.log();
  if (Array.isArray(args)) {
    result = f(...args);
  } else {
    result = f(args);
  }

  console.log(`RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit("RESULT EXPECTED: 4\t\tTime", search, [[4, 5, 6, 7, 0, 1, 2], 0]);
timeit("RESULT EXPECTED: -1\t\tTime", search, [[4, 5, 6, 7, 0, 1, 2], 3]);
timeit("RESULT EXPECTED: 4\t\tTime", search, [[4, 5, 6, 7, 0, 1, 2], 0]);
timeit("RESULT EXPECTED: 0\t\tTime", search, [[1], 1]);
timeit("RESULT EXPECTED: 0\t\tTime", search, [[1, 3], 1]);
timeit("RESULT EXPECTED: 1\t\tTime", search, [[1, 3], 3]);
timeit("RESULT EXPECTED: 2\t\tTime", search, [[1, 3, 5], 5]);
