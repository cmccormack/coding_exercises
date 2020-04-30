const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const debugMode = false;

const debug = (...args) => {
  if (debugMode) console.debug(`[BuildTree] `, ...args);
};

const buildBinaryTreeFromArray = function (arr) {
  debug(JSON.stringify(arr), arr.length);
  const root = new TreeNode(arr[0]);
  arr[0] = root;
  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];
    debug(`i: ${i} arr[i]: ${JSON.stringify(arr[i])}`);
    if (current === null) continue;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (arr[left] < arr.length && arr[left] !== null) {
      debug(`i: ${i} left child found at arr[${left}]: ${arr[left]}`);
      arr[left] = new TreeNode(arr[left]);
      current.left = arr[left];
    }
    if (arr[right] < arr.length && arr[right] !== null) {
      debug(`i: ${i} right child found at arr[${right}]: ${arr[right]}`);
      arr[right] = new TreeNode(arr[right]);
      current.right = arr[right];
    }
  }

  return root;
};

exports.TreeNode = TreeNode;
exports.buildBinaryTreeFromArray = buildBinaryTreeFromArray;
