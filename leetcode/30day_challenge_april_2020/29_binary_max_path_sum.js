const { TreeNode } = require("../../utils/buildBinaryTreeFromArray");
const bt = require("../../utils/buildBinaryTreeFromArray")
  .buildBinaryTreeFromArray;
/*

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes 
from some starting node to any node in the tree along the parent-child 
connections. The path must contain at least one node and does not need 
to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6

Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  const dfs = (root) => {
    if (!root) return null;

    const leftVal = dfs(root.left);
    const rightVal = dfs(root.right);
    let currentMax = root.val;

    let maxLeft = Math.max(root.val, root.val + leftVal);
    let maxRight = Math.max(root.val, root.val + rightVal);
    let sumNode = root.val + leftVal + rightVal;
    max = Math.max(max, maxLeft, maxRight, sumNode);
    currentMax = Math.max(currentMax, maxLeft, maxRight);
    console.log(
      `root: ${root.val} leftVal: ${leftVal} rightVal: ${rightVal} maxLeft: ${maxLeft} maxRight: ${maxRight} currentMax: ${currentMax} max: ${max}`
    );
    return currentMax;
  };
  dfs(root);
  return max;
};

const br = `\n---------------------------------------------\n`;
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};
timeit(`RESULT EXPECTED: 6\t\tTime`, maxPathSum, bt([1, 2, 3]));
timeit(
  `RESULT EXPECTED: 42\t\tTime`,
  maxPathSum,
  bt([-10, 9, 20, null, null, 15, 7])
);
timeit(`RESULT EXPECTED: -3\t\tTime`, maxPathSum, bt([-3]));
timeit(`RESULT EXPECTED: 4\t\tTime`, maxPathSum, bt([1, -2, 3]));
timeit(
  `RESULT EXPECTED: 3\t\tTime`,
  maxPathSum,
  bt([1, -2, -3, 1, 3, -2, null, -1])
);
