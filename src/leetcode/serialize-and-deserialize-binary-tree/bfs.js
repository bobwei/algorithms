/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const createNode = (val) => {
  if (val === null) {
    return val;
  }
  return new TreeNode(val);
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
  const output = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      output.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      output.push(null);
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
  const root = new TreeNode(data.shift());
  const queue = [root];
  while (data.length) {
    const node = queue.shift();
    if (!node) {
      continue;
    }
    node.left = createNode(data.shift());
    queue.push(node.left);
    node.right = createNode(data.shift());
    queue.push(node.right);
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
