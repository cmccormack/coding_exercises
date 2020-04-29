const TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const buildBinaryTreeFromArray = function (arr) {
  const root = new TreeNode(arr[0]);
  arr[0] = root;
  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];
    // console.log(current || "null");
    if (!current) continue;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (arr[left]) {
      // console.log(`arr[${left}] found (left): ${arr[left]}`);
      arr[left] = new TreeNode(arr[left]);
      current.left = arr[left];
    }
    if (arr[right]) {
      // console.log(`arr[${right}] found (right): ${arr[right]}`);
      arr[right] = new TreeNode(arr[right]);
      current.right = arr[right];
    }
  }

  return root;
};

exports.TreeNode = TreeNode;
exports.buildBinaryTreeFromArray = buildBinaryTreeFromArray;
