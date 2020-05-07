/*
Return the root node of a binary search tree that matches the given 
  preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, 
    any descendant of node.left has a value < node.val, and any descendant 
    of node.right has a value > node.val.  Also recall that a preorder traversal 
    displays the value of the node first, then traverses node.left, then traverses 
    node.right.)

 

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

 

Note: 

    1 <= preorder.length <= 100
    The values of preorder are distinct.

*/

// Definition for a binary tree node.
var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const MIN = -Infinity;
  const MAX = Infinity;
  let i = 0;
  if (!preorder || preorder.length === 0) {
    return null;
  }
  const dfs = (preorder, min, max) => {
    const current_value = preorder[i];
    if (i >= preorder.length) {
      return null;
    }

    if (current_value < min || current_value > max) {
      return null;
    }

    i += 1;
    const root = new TreeNode(current_value);
    root.left = dfs(preorder, min, current_value);
    root.right = dfs(preorder, current_value, max);

    return root;
  };

  // Apparently the return was a tree node of root, not the bfs array...
  // const bfs = (root_node, depth = 0) => {
  //   let i = 1;
  //   const queue = [root_node];
  //   while (i <= queue.length) {
  //     if (queue[i - 1]) {
  //       if (queue[i - 1].left || queue[i - 1].right) {
  //         queue[2 * i - 1] = queue[i - 1].left;
  //         queue[2 * i] = queue[i - 1].right;
  //       }
  //     }
  //     i += 1;
  //   }

  //   return queue.map((node) => (node && node.val) || null);
  // };

  return dfs(preorder, MIN, MAX);
};

var timeit = function (label, f, args) {
  console.time(label);
  console.log();
  if (Array.isArray(args)) {
    result = f(...args);
  } else {
    result = f(args);
  }

  console.log(`RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit("RESULT EXPECTED: [8, 5, 10, 1, 7, null, 12]\t\tTime", bstFromPreorder, [
  [8, 5, 1, 7, 10, 12],
]);
timeit("RESULT EXPECTED: [8, 5, 10, 1, 7, null, 12]\t\tTime", bstFromPreorder, [
  [108, 105, 101, 107, 110, 112],
]);

/*

2**0 - 1 == 0
2**0     == 1
2**1 - 1 == 1
2**1     == 2
2**2 - 1 == 3
2**2     == 4
2**3 -1  == 7
2**3     == 8


0**2     == 0
0**2 + 1 == 0
1**2     == 1
1**2 + 1 == 2
2**2     == 4
2**2 + 1 == 5
3**2     == 9

2i     == 0
2i + 1 == 1
2i     == 2
2i + 1 == 3
2i     == 4

1:
2i - 1 == 1
2i     == 2
2:
2i - 1 == 3
2i     == 4
3:
2i - 1 == 5
2i     == 6


*/
