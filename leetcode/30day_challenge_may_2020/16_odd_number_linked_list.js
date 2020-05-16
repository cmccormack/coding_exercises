const timeit = require("../../utils/timeit");
/*

Given a singly linked list, group all odd nodes together followed by the 
even nodes. Please note here we are talking about the node number and not the 
value in the nodes.

You should try to do it in place. The program should run in O(1) space 
complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as 
it was in the input.
The first node is considered odd, the second node even and so on ...

*/

var ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;
  let odds = head;
  let evens = head.next;
  const evenStart = evens;
  while (odds.next && evens.next) {
    odds.next = evens.next;
    evens.next = evens.next.next;
    odds = odds.next;
    evens = evens.next;
  }
  odds.next = evenStart;
  return head;
};

var buildList = function (input, expected) {
  let root = new ListNode(input[0]);
  let current = root;
  for (let val of input.slice(1)) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return root;
};

var tester = (input, expected) => {
  while (input.next) {
    input = input.next;
    expected = expected.next;
    if (!(input.val === expected.val)) return false;
    if (!(input.val.next === expected.val.next)) return false;
  }
  return true;
};

const input = buildList([1, 2, 3, 4, 5]);
const expected = buildList([1, 3, 5, 2, 4]);
const result = oddEvenList(input);
console.log(JSON.stringify(input), JSON.stringify(result));
console.log(tester(result, expected));
