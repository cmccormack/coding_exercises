const timeit = require("../../utils/timeit");
const bt = require("../../utils/buildBinaryTreeFromArray");

/*

Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  let nodes = [root];
  let i = 0;

  while (nodes[i] !== null) {
    if (nodes[i].left) {
      nodes.push(nodes[i].left);
    } else {
      return nodes.length;
    }
    if (nodes[i].right) {
      nodes.push(nodes[i].right);
    } else {
      return nodes.length;
    }
    i += 1;
  }
};

timeit(countNodes, 6, bt([1, 2, 3, 4, 5, 6]));
