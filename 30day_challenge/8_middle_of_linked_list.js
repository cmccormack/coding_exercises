/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let current = head;
  let middle = head;
  let length = 0;
  while (current) {
    length += 1;
    if (length % 2 === 0) {
      middle = middle.next;
    }
    current = current.next;
  }

  return middle;
};
