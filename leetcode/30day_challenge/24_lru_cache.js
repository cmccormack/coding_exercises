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
  if (this.map.get(key)) {
    // Update DLL by removing key Node and readding at head

    return this.map.get(key).value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // Check if value already exists in map
  if (this.map.get(key)) {
    // Move Node with matching key to head of DLL by deleting then readding
  } else {
    // Check if at capacity
    if (this.map.size === this.capacity) {
      // Remove least recently used Node
      // Remove key from map
    }
    // Add new node to head
    this.head = new Node(value);
    this.map.set(key, this.head);
  }
};

LRUCache.prototype.delete = function (key) {
  const del_node = this.map.get(key);
  this.map.delete(key);

  if (del_node === this.head) {
    if (del_node.prev) {
      this.head = del_node.prev;
      del_node.prev.next = null;

      // Removing last Node in DLL
    } else {
      this.tail = null;
      this.head = null;
    }
  } elseif (del_node === this.tail) {
    
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 *
 */

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
/*
[null, null]
[1, null] 1 is newest so value of 2 (capacity)?         {0: 2, 1: null},{1: 0}
[1, 2] 2 is newest, so value of 2, 1 decrements by 1    {0: 1, 1: 2},   {1: 0, 2: 1}
[1, 2] 1 is retrieved, value set to 2, 2 is decremented {0: 2, 1: 1},   {1: 0, 2: 1}
[3] lowest value (2) is removed, 3 inserted             {0: 2, 1: 1},   {1: 0, 2: 1}


*/
