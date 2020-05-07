// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//     push(x) -- Push element x onto stack.
//     pop() -- Removes the element on top of the stack.
//     top() -- Get the top element.
//     getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
  this.updateMin = function(x) {
    this.min = x < this.min ? x : this.min
    return this.min
  }
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push([x, this.updateMin(x)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack = this.stack.slice(0,-1);
  if (this.stack.length !== 0) {
    this.min = this.stack[this.stack.length -1][1]
  } else {
    this.min = Infinity
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length !== 0) {
    return this.stack[this.stack.length - 1][0]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
minStack = new MinStack();
minStack.push(6);
console.log(minStack.stack)
minStack.push(6);
console.log(minStack.stack)
minStack.push(7);
console.log(minStack.stack)
console.log("top:",minStack.top())
minStack.pop()
console.log(minStack.stack)
console.log("min:",minStack.getMin())
minStack.pop()
console.log(minStack.stack)
console.log("min:",minStack.getMin())
minStack.pop()
console.log(minStack.stack)
console.log("min:",minStack.getMin())
minStack.push(7)
console.log(minStack.stack)
console.log("top:",minStack.top())
console.log("min:",minStack.getMin())
minStack.push(8)
console.log("top:",minStack.top())
console.log("min:",minStack.getMin())
minStack.pop()
console.log("min:",minStack.getMin())

