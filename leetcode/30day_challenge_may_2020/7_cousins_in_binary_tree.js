const timeit = require("../../utils/timeit");
const bt = require("../../utils/buildBinaryTreeFromArray");

/*

In a binary tree, the root node is at depth 0, and children of each 
depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, 
but have different parents.

We are given the root of a binary tree with unique values, and the 
values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values 
x and y are cousins.

*/

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function (root, x, y, i = 0) {
  const findDepth = (node, parent, value, depth) => {
    if (!node) {
      return null;
    }

    if (node.val === value) {
      return [depth, parent ? parent.val : null];
    }

    const leftDepth = findDepth(node.left, node, value, depth + 1);

    if (leftDepth) {
      return leftDepth;
    }

    return findDepth(node.right, node, value, depth + 1);
  };

  const xDepth = findDepth(root, null, x, 0);
  const yDepth = findDepth(root, null, y, 0);

  if (!xDepth || !yDepth) return false;
  if (xDepth[0] === yDepth[0]) {
    if (xDepth[1] === yDepth[1]) {
      return false;
    }
    return true;
  }
  return false;
};

timeit(isCousins, false, bt([1, 2, 3, 4], null, 0), 4, 3);
timeit(isCousins, true, bt([1, 2, 3, null, 4, null, 5], null, 0), 5, 4);
timeit(isCousins, false, bt([1, 2, 3, null, 4], null, 0), 2, 3);
timeit(isCousins, false, bt([1, 2, 3, null, 4], null, 0), 2, 5);
timeit(
  isCousins,
  false,
  bt([1, null, 2, 3, null, null, 4, null, 5], null, 0),
  1,
  3
);
