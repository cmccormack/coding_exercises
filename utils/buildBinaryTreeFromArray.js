const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const debugMode = false;

const debug = (...args) => {
  if (debugMode) console.debug(`[BuildTree] `, ...args);
};

// const buildBinaryTreeFromArray_old = function (arr) {
//   debug(JSON.stringify(arr), arr.length);
//   const root = new TreeNode(arr[0]);
//   arr[0] = root;
//   for (let i = 0; i < arr.length; i += 1) {
//     let current = arr[i];
//     debug(`i: ${i} arr[i]: ${JSON.stringify(arr[i])}`);
//     if (current === null) continue;
//     const left = 2 * i + 1;
//     const right = 2 * i + 2;
//     if (arr[left] < arr.length && arr[left] !== null) {
//       debug(`i: ${i} left child found at arr[${left}]: ${arr[left]}`);
//       arr[left] = new TreeNode(arr[left]);
//       current.left = arr[left];
//     }
//     if (arr[right] < arr.length && arr[right] !== null) {
//       debug(`i: ${i} right child found at arr[${right}]: ${arr[right]}`);
//       arr[right] = new TreeNode(arr[right]);
//       current.right = arr[right];
//     }
//   }

//   return root;
// };

// Using recursive approach
const buildBinaryTreeFromArray = (arr, root = null, i = 0) => {
  if (i < arr.length) {
    root = new TreeNode(arr[i]);

    root.left = buildBinaryTreeFromArray(arr, root.left, 2 * i + 1);
    root.right = buildBinaryTreeFromArray(arr, root.right, 2 * i + 2);
  }

  return root;
};

// const printInOrder = (root) => {
//   if (root !== null) {
//     printInOrder(root.left);
//     console.log(`${root.val} `);
//     printInOrder(root.right);
//   }
// };
// const printPreOrder = (root) => {
//   let output = "";

//   (function preOrder(root) {
//     if (root !== null) {
//       output += `${root.val} `;
//       preOrder(root.left);
//       preOrder(root.right);
//     }
//   })(root);

//   console.log(output);
// };

// const res = buildBinaryTreeFromArray(
//   [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, null, null],
//   null,
//   0
// );
// console.log(res);
exports.TreeNode = TreeNode;
exports.buildBinaryTreeFromArray = buildBinaryTreeFromArray;
module.exports = buildBinaryTreeFromArray;
