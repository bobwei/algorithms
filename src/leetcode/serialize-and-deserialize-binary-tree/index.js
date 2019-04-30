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
    output.push(node ? node.val : node);
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
  const root = createNode(data);
  const queue = [root];
  while (data.length) {
    const node = queue.shift();
    node.left = createNode(data);
    if (node.left) {
      queue.push(node.left);
    }
    node.right = createNode(data);
    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
};

function createNode(data) {
  if (!data.length) {
    return null;
  }
  if (data[0] === null) {
    return data.shift();
  }
  return new TreeNode(data.shift());
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
