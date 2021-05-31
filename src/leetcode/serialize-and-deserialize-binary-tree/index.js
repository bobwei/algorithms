/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return '';
  }
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data, arr = data.split(',')) {
  const node = createRoot(arr.shift());
  if (!node) {
    return node;
  }
  node.left = deserialize(data, arr);
  node.right = deserialize(data, arr);
  return node;
};

function createRoot(val) {
  if (!val) {
    return null;
  }
  return new TreeNode(val);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
