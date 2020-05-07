// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.
//  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

class MaxIntHeap {
  constructor(arr = []) {
    this.heap = [null];

    for (let item of arr) {
      this.insert(item);
    }
  }

  _filterUp(i) {
    let currentIndex = i;
    let parentIndex = ~~(currentIndex / 2);
    const item = this.heap[currentIndex];

    while (this.heap[parentIndex] && item > this.heap[parentIndex]) {
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = item;
      currentIndex = parentIndex;
      parentIndex = ~~(currentIndex / 2);
    }
  }

  _preferredChild(leftIndex, rightIndex) {
    const { l, r } = { l: this.heap[leftIndex], r: this.heap[rightIndex] };
    return r === undefined || l > r ? leftIndex : rightIndex;
  }

  _filterDown(i) {
    let leftChildIndex = i * 2;
    let rightChildIndex = i * 2 + 1;
    const current = this.heap[i];

    // Return early if no children
    if (leftChildIndex >= this.heap.length) {
      return;
    }

    const childIndex = this._preferredChild(leftChildIndex, rightChildIndex);
    const child = this.heap[childIndex];

    if (current < child) {
      // Swap child and parent node
      this.heap[i] = child;
      this.heap[childIndex] = current;
      this._filterDown(childIndex);
    }
  }

  insert(newItem) {
    this.heap.push(newItem);
    this._filterUp(this.heap.length - 1);
  }

  remove(i = 1) {
    if (i < 0 || i >= this.heap.length) {
      return undefined;
    }
    const removedItem = this.heap[i];
    if (this.size > 1) {
      this.heap[i] = this.heap.pop();
      this._filterDown(i);
    } else {
      this.heap = [null];
    }
    return removedItem;
  }

  print(depth = 0) {
    let start = 2 ** depth;
    let length = 2 ** depth;

    while (start < this.heap.length) {
      console.info(this.heap.slice(start, start + length));
      start = length = 2 ** ++depth;
    }
    console.info("\n");
  }

  get size() {
    return this.heap.length - 1;
  }
}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxIntHeap(stones);
  while (heap.size > 1) {
    const a = heap.remove();
    const b = heap.remove();
    const difference = Math.abs(a - b);
    if (difference) {
      heap.insert(difference);
    }
  }
  return heap.size === 0 ? 0 : heap.heap[1];
};

const input = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(input));
