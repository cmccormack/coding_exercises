/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] 
  is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of
  the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as 
    extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  size_nums = nums.length;
  const leftProduct = new Array(size_nums);
  const result = new Array(size_nums);
  leftProduct[0] = 1;

  for (let i = 0; i < size_nums - 1; i++) {
    leftProduct[i + 1] = nums[i] * leftProduct[i];
  }

  let currProduct = 1;
  for (let i = size_nums - 1; i >= 0; i--) {
    result[i] = currProduct * leftProduct[i];
    currProduct *= nums[i];
  }

  return result;
};

var productExceptSelf2 = function (nums) {
  // let total = 1;
  // for (let i = 0; i < nums.length; i += 1) {
  //   total *= v;
  // }
  const total_log = Math.log(nums.reduce((a, v) => (a *= v)));
  return nums.map((num) => Math.round(Math.E ** (total_log - Math.log(num))));
};

const productExceptSelf3 = (arr) => {
  const idx = (a, i) => (i in a ? a[i] : 1);
  const table = arr.reduce(
    ([f, s], x, i) => [
      f.concat(idx(f, i - 1) * x),
      [idx(s, 0) * idx(arr, arr.length - i - 1)].concat(s),
    ],
    [[], []]
  );

  return arr.map((_, i) => idx(table[0], i - 1) * idx(table[1], i + 1));
};

var timeit = function (f, args, label) {
  console.time(label);
  f(args);
  console.timeEnd(label);
};

console.log(timeit(productExceptSelf, [1, 2, 3, 4], "using loops"));
console.log(timeit(productExceptSelf2, [1, 2, 3, 4], "using logarithms"));
console.log(timeit(productExceptSelf3, [1, 2, 3, 4], "using alpox"));
