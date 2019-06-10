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
  const queue = [root];
  const output = [];
  while (queue.length) {
    const node = queue.shift();
    output.push(node === null ? node : node.val);
    if (node) {
      queue.push(node.left, node.right);
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
  const root = createNode(data.shift());
  const queue = [root];
  while (data.length) {
    const node = queue.shift();
    node.left = createNode(data.shift());
    if (node.left) {
      queue.push(node.left);
    }
    node.right = createNode(data.shift());
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};

function createNode(val) {
  if (val === null) {
    return val;
  }
  return new TreeNode(val);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
