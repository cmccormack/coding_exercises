/*

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
        index: 0  1  2  3  4
             [ 3, 2, 1, 0, 4]
    max index: 3  3  3  0


        index: 0  1  2  3 
              [2, 5, 0, 0]
    max index: 2  6  6  6
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const numLen = nums.length;
  let maxIndex = nums[0];
  // if (numLen === 1) return true;
  for (let i = 0; i < nums.length; i += 1) {
    if (i == nums.length - 1) {
      return true;
    }

    if (maxIndex <= i && nums[i] === 0) {
      return false;
    }

    maxIndex = Math.max(nums[i] + 1, maxIndex);
  }
  return true;
};

const br = `\n---------------------------------------------\n`;
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit(`RESULT EXPECTED: true\t\tTime`, canJump, [2, 3, 1, 1, 4]);
timeit(`RESULT EXPECTED: false\t\tTime`, canJump, [3, 2, 1, 0, 4]);
timeit(`RESULT EXPECTED: true\t\tTime`, canJump, [2, 5, 0, 0]);
timeit(`RESULT EXPECTED: true\t\tTime`, canJump, [0]);
timeit(`RESULT EXPECTED: true\t\tTime`, canJump, [2, 0, 0]);
