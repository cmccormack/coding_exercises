/*

You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

    FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
    int showFirstUnique() returns the value of the first unique integer of the queue, 
    and returns -1 if there is no such integer.
    void add(int value) insert value to the queue.


*/

const fs = require("fs");
const testInput = JSON.parse(
  fs.readFileSync("first_unique_number_data.json", "utf8")
);

var Node = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.nodemap = new Map();
  this.count = 0;
  this.head = null;
  this.tail = null;

  for (let item of nums) {
    this.add(item);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  // console.log(this.nodemap, this.head, this.tail);
  if (this.count === 0) {
    console.log(`No uniques, returning -1`);
    return -1;
  }
  console.log(`First Unique: ${this.head.value} (count: ${this.count})`);
  return this.head.value;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  console.log(`Attempting to add ${value}... (current count: ${this.count})`);
  if (this.nodemap.has(value)) {
    if (this.nodemap.get(value).value === null) {
      console.log(`Value ${value} already exists in nodemap and is null`);
      return;
    }
    console.log(`\tValue ${value} already exists in nodemap, deleting...`);
    this.count -= 1;
    return this.delete(value);
  }
  this.count += 1;
  const add_node = new Node(value);
  this.nodemap.set(value, add_node);
  if (!this.head) {
    this.head = add_node;
    this.tail = add_node;
  } else {
    this.tail.prev = add_node;
    add_node.next = this.tail;
    this.tail = add_node;
  }
  console.log(
    `Successfully added ${value}.  nodemap: ${JSON.stringify(
      this.printNodemap()
    )}`
  );
};

FirstUnique.prototype.delete = function (value) {
  if (this.nodemap.size === 0) return false;
  const del_node = this.nodemap.get(value);
  if (del_node.prev) {
    // Deleted Node is Middle Node
    if (del_node.next) {
      del_node.next.prev = del_node.prev;
      del_node.prev.next = del_node.next;

      // Deleted Node is Head Node
    } else {
      del_node.prev.next = null;
      this.head = del_node.prev;
    }
  } else {
    // Deleted Node is Tail Node
    if (del_node.next) {
      del_node.next.prev = null;
      this.tail = del_node.next;

      // Deleted Node is lonely Node :(
    } else {
      this.head = null;
      this.tail = null;
    }
  }
  del_node.value = null;
  console.log(
    `\t\tSuccessfully deleted ${value}.  nodemap: ${JSON.stringify(
      this.printNodemap()
    )}`
  );
};

FirstUnique.prototype.printQueue = function () {
  if (!this.head) return [];
  let current = this.head;
  const queue = [current.value];
  while (current.prev) {
    current = current.prev;
    queue.push(current.value);
  }
  return queue;
};
FirstUnique.prototype.printNodemap = function () {
  return Array.from(this.nodemap.entries()).map(([k, v]) => ({
    k,
    v: v.value,
  }));
};
/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

// const firstUnique = new FirstUnique([2, 3, 5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5); // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2); // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3); // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

/*
["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
*/

const firstUnique2 = new FirstUnique([7, 7, 7, 7, 7, 7]);
firstUnique2.showFirstUnique(); // return -1
firstUnique2.add(7);
firstUnique2.add(3);
firstUnique2.showFirstUnique(); // return 3
firstUnique2.add(3);
firstUnique2.add(7);
firstUnique2.add(17);
firstUnique2.showFirstUnique(); // return 17
