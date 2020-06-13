const timeit = require("../../utils/timeit");
/*

Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

Example:
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  console.log(`initializing new RandomizedSet...`);
  this.map = new Map();
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  console.log(`inserting ${val}...`);
  if (this.map.has(val)) {
    console.log(
      `\t${val} already in ${JSON.stringify(
        Array.from(this.map.keys())
      )}, returning false.`
    );
    return false;
  }
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */

RandomizedSet.prototype.remove = function (val) {
  console.log(`removing ${val}...`);
  if (!this.map.has(val)) {
    console.log(`\t${val} not in this.map, returning false`);
    return false;
  }
  console.log(this.arr);
  console.log(this.map);
  const arrIndex = this.map.get(val);
  console.log(`arrIndex: ${arrIndex}, len: ${this.map.length}`);
  if (arrIndex === this.arr.length - 1) {
    console.log("popping...");
    this.arr.pop();
  } else {
    this.arr[arrIndex] = this.arr.pop();
    this.map.set(this.arr[arrIndex], arrIndex);
  }
  this.map.delete(val);

  console.log(this.arr);
  console.log(this.map);

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  console.log("getting random...");
  return this.arr[Math.trunc(Math.random() * this.arr.length)];
};

let rand;
let randomSet = new RandomizedSet();
randomSet.insert(1);
randomSet.remove(2);
randomSet.insert(2);
rand = randomSet.getRandom();
console.log(rand);
randomSet.remove(1);
randomSet.insert(2);
rand = randomSet.getRandom();
console.log(rand);

console.log();
randomSet = new RandomizedSet();
randomSet.insert(0);
randomSet.insert(1);
randomSet.remove(0);
randomSet.insert(2);
randomSet.remove(1);
rand = randomSet.getRandom();
console.log(rand);

console.log();
randomSet = new RandomizedSet();
randomSet.insert(0);
randomSet.remove(0);
randomSet.insert(-1);
randomSet.remove(0);
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());
