/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const preOrder = (root) => {
  const output = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    output.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return output;
};

const getRightIndex = (arr, i, j) => {
  for (let k = i; k <= j; k++) {
    if (arr[k] > arr[i]) {
      return k;
    }
  }
  return j + 1;
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return [];
  }
  return preOrder(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, i = 0, j = data.length - 1) {
  if (i > j) {
    return null;
  }
  const r = getRightIndex(data, i, j);
  const root = new TreeNode(data[i]);
  root.left = deserialize(data, i + 1, r - 1);
  root.right = deserialize(data, r, j);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
