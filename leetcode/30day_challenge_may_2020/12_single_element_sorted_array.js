const timeit = require("../../utils/timeit");
/*

You are given a sorted array consisting of only integers where every element 
appears exactly twice, except for one element which appears exactly once. Find 
this single element that appears only once.


Example 1:

Input: [1,1,2,3,*3*,4,4,8,8] len == 9, mid == 9//2 == 4, midValue == 3
Output: 2

Example 2:

Input: [1,1,2,3,3,*4*,4,5,5,8,8] len == 11, mid == 11//2 == 5, midValue == 4
Output: 2


Example 3:

Input: [3,3,7,*7*,10,11,11] len == 7, mid == 7//2 == 3, midValue == 7
Output: 10

Example 4:

Input: [3,7,7,*10*,10,11,11] len == 7, mid == 7//2 == 3, midValue == 10
Output: 3


 

Note: Your solution should run in O(log n) time and O(1) space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const numsLen = nums.length;

  let leftI = 0;
  let rightI = nums.length - 1;
  let midI;

  while (leftI <= rightI) {
    midI = (((rightI - leftI) / 2 + 0.5) << 0) + leftI;

    // Done
    if (leftI === rightI) return nums[midI];

    // Mid is even
    if (midI % 2 === 0) {
      // Single is to the left
      if (nums[midI - 1] === nums[midI]) {
        rightI = midI - 2;

        // Single is to the right
      } else if (nums[midI + 1] === nums[midI]) {
        leftI = midI + 2;

        // Done
      } else {
        return nums[midI];
      }

      // Mid is odd
    } else {
      // Single is to the left
      if (nums[midI + 1] === nums[midI]) {
        rightI = midI - 1;

        // Single is to the right
      } else if (nums[midI - 1] === nums[midI]) {
        leftI = midI + 1;

        // Done
      } else {
        return nums[midI];
      }
    }

    // break;
  }

  console.log(
    `${JSON.stringify(nums)}, length: ${numsLen}, midI: ${midI} (${
      midI % 2 == 0 ? "even" : "odd"
    }), mid: ${nums[midI]}`
  );
};

timeit(singleNonDuplicate, 2, [1, 1, 2, 3, 3, 4, 4, 8, 8]);
timeit(singleNonDuplicate, 2, [1, 1, 2, 3, 3, 4, 4, 5, 5, 8, 8]);
timeit(singleNonDuplicate, 10, [3, 3, 7, 7, 10, 11, 11]);
timeit(singleNonDuplicate, 3, [3, 7, 7, 10, 10, 11, 11]);
timeit(singleNonDuplicate, 3, [3, 7, 7, 10, 10]);
timeit(singleNonDuplicate, 10, [3, 3, 7, 7, 10]);
timeit(singleNonDuplicate, 3, [3, 7, 7, 8, 8, 10, 10]);
timeit(singleNonDuplicate, 10, [3, 3, 7, 7, 8, 8, 10]);
