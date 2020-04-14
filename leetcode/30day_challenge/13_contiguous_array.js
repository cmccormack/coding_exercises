/*
Given a binary array, find the maximum length of a contiguous 
subarray with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with 
equal number of 0 and 1.

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
  let maxlen = 0;
  let count = 0;
  const collector = new Map();
  collector.set(0, -1);

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      count += -1;
    }
    if (nums[i] === 1) {
      count += 1;
    }

    if (collector.has(count)) {
      maxlen = Math.max(maxlen, i - collector.get(count));
    } else {
      collector.set(count, i);
    }
  }
  return maxlen;
};

console.assert(findMaxLength([0]) === 0, "borked");
console.assert(findMaxLength([0, 1]) === 2, "borked");
console.assert(findMaxLength([0, 1, 0]) === 2, "borked");
console.assert(findMaxLength([0, 0, 0, 1, 1]) === 4, "borked");
console.assert(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]) === 6, "borked");
console.assert(
  findMaxLength([
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
  ]) === 68,
  "borked"
);
