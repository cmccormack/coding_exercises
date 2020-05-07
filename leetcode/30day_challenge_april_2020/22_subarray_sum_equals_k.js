/*

Given an array of integers and an integer k, you need to find the total 
number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2

Note:

    The length of the array is in range [1, 20,000].
    The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].


*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map()
  map.set(0,1)

  let sum = 0;
  let count = 0;
  console.log(nums)
  for (const item of nums) {
    sum+=item
    console.log(`New iteration, sum=${sum}`)
    if (map.has(sum-k)) {
      console.log(`map has sum(${sum}) - k(${k}): ${map.get(sum-k)}`)
      count += map.get(sum - k) || 0
    }
    if (map.get(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
    console.log(map)
  }
  return count
};


const br = `\n---------------------------------------------\n`
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit(`RESULT EXPECTED: 2\t\tTime`, subarraySum, [1,1,1], 2);
timeit(`RESULT EXPECTED: 4\t\tTime`, subarraySum, [1,2,1,2,1], 3);
timeit(`RESULT EXPECTED: 2\t\tTime`, subarraySum, [1,2,3], 3);
timeit(`RESULT EXPECTED: 3\t\tTime`, subarraySum, [1,2,3,4,5,6,-18], 3);
