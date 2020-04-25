/*
Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists
in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present.
When the cache reached its capacity, it should invalidate the least recently
used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4


Solution using doubly linked list (DLL)
*/
var Node = function (key, value) {
  this.next = null;
  this.prev = null;
  this.key = key;
  this.value = value;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // Return Node.value or -1 if item not in map
  const existingNode = this.map.get(key);
  if (existingNode) {
    console.log(`Called get with existing node: ${key}...`);
    // Update DLL by removing key Node and readding at head
    this.delete(existingNode);
    const newNode = new Node(key, existingNode.value);
    this.add(newNode);
    this.map.set(key, newNode);
    console.log(
      `Called get with ${key}, key found!  returning ${this.map.get(key).value}`
    );
    return this.map.get(key).value;
  }
  console.log(`Called get with ${key}, key not found, returning -1`);
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const oldNode = this.map.get(key);
  const newNode = new Node(key, value);

  // Check if value already exists in map
  if (oldNode) {
    // Move Node with matching key to head of DLL by deleting then readding
    this.delete(this.map.get(key));
    this.map.delete(key);
  }
  // Check if at capacity
  if (this.map.size === this.capacity) {
    console.log(
      `Called put with new key at full capacity: ${this.map.size} ${this.capacity}`
    );
    // Remove key from map
    this.map.delete(this.tail.key);
    // Remove least recently used Node
    this.delete(this.tail);
  }
  // Add new node to head and pointer to new Node to map
  this.add(newNode);
  this.map.set(key, newNode);
};

LRUCache.prototype.add = function (node) {
  const prevHead = this.head;
  if (!prevHead) {
    // Empty map
    this.head = node;
    this.tail = node;
  } else {
    prevHead.next = node;
    node.prev = prevHead;
    this.head = node;
  }
  console.log(
    `Added Node(${node.value}).  New:  Head: ${
      this.head ? this.head.key + "," + this.head.value : null
    }  Tail: ${this.tail ? this.tail.key + "," + this.tail.value : null}`
  );
};

LRUCache.prototype.delete = function (node) {
  const del_node = node;

  if (del_node.prev) {
    // Inner Node
    console.log(`Deleting inner node: ${del_node.key}`);
    if (del_node.next) {
      del_node.prev.next = del_node.next;
      del_node.next.prev = del_node.prev;

      // Head Node
    } else {
      console.log(`Deleting Head node: ${del_node.key}`);
      this.head = del_node.prev;
      this.head.next = null;
    }
    // Tail Node
  } else if (del_node.next) {
    console.log(`Deleting Tail node: ${del_node.key}`);
    this.tail = del_node.next;
    this.tail.prev = null;

    // Lonely Node :(
  } else {
    console.log(`Deleting Lonely node: ${del_node.key}`);
    this.head = null;
    this.tail = null;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 *
 */

// const cache = new LRUCache(2);
// cache.put(1, 1);
// console.log(cache.map);
// cache.put(2, 2);
// console.log(cache.map);
// cache.delete(2);
// console.log(cache.map);
// cache.get(1); // returns 1
// cache.put(3, 3); // evicts key 2
// cache.get(2); // returns -1 (not found)
// cache.put(4, 4); // evicts key 1
// cache.get(1); // returns -1 (not found)
// cache.get(3); // returns 3
// cache.get(4); // returns 4
/*
[null, null]
[1, null] 1 is newest so value of 2 (capacity)?         {0: 2, 1: null},{1: 0}
[1, 2] 2 is newest, so value of 2, 1 decrements by 1    {0: 1, 1: 2},   {1: 0, 2: 1}
[1, 2] 1 is retrieved, value set to 2, 2 is decremented {0: 2, 1: 1},   {1: 0, 2: 1}
[3] lowest value (2) is removed, 3 inserted             {0: 2, 1: 1},   {1: 0, 2: 1}


*/

// const cache = new LRUCache(2);
// cache.put(2, 1);
// cache.put(2, 2);
// cache.get(2);
// cache.put(1, 1);
// cache.put(4, 1);
// cache.get(2);

const cache = new LRUCache(2);
cache.get(2);
cache.put(2, 6);
cache.get(1);
cache.put(1, 5);
cache.put(1, 2);
cache.get(1);
cache.get(2);
