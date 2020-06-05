/*
Given an array w of positive integers, where w[i] describes the weight of 
index i, write a function pickIndex which randomly picks an index in 
proportion to its weight.

Note:

    1 <= w.length <= 10000
    1 <= w[i] <= 10^5
    pickIndex will be called at most 10000 times.

Example 1:

Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]

Example 2:

Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]

Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments.
Solution's constructor has one argument, the array w. pickIndex has no 
arguments. Arguments are always wrapped with a list, even if there aren't any.

*/

/**
 * @param {number[]} w
 */
var Solution_1 = function (w) {
  this.sum = w.reduce((a, v) => a + v);
  let tempSum = 0;
  this.weightedArr = w.map((v) => {
    tempSum += v;
    return tempSum;
  });
};

// w = [40, 30, 15, 5], weightedArr= [40, 70, 85, 90]
var Solution = function (w) {
  this.sum = 0;
  this.weightedArr = [];
  for (let weight of w) {
    this.sum += weight;
    this.weightedArr.push(this.sum);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex_1 = function () {
  const randomVal = Math.trunc(Math.random() * this.sum);
  return this.weightedArr.filter((v) => v <= randomVal).length;
};

// random value is 80, index should be 2
Solution.prototype.pickIndex = function () {
  const rand = Math.trunc(Math.random() * this.sum);

  // Use binary search to find the index weight-based index
  let left = 0;
  let right = this.weightedArr.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (rand >= this.weightedArr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const obj = new Solution([40, 30, 15, 5]);
console.log(obj.weightedArr);
console.log(obj.pickIndex());
