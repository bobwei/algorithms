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
var serialize = function(root, output = []) {
  output.push(root ? root.val : root);
  if (root) {
    serialize(root.left, output);
    serialize(root.right, output);
  }
  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length || data[0] === null) {
    data.shift();
    return null;
  }
  const root = new TreeNode(data.shift());
  root.left = deserialize(data);
  root.right = deserialize(data);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
