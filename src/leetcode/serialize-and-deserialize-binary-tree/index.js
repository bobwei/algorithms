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
    return [];
  }
  const output = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      output.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    } else {
      output.push(node);
    }
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
  if (!data.length) {
    return null;
  }
  const val = data.shift();
  if (val === null) {
    return val;
  }
  const root = new TreeNode(val);
  root.left = deserialize(data);
  root.right = deserialize(data);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
