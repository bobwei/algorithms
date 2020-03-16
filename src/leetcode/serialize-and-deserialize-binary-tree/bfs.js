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
  let output = '';
  while (queue.length) {
    const node = queue.shift();
    output += (output.length ? ',' : '') + (node ? node.val : '');
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
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
  const arr = data.split(',');
  const root = createNode(arr.shift());
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      node.left = createNode(arr.shift());
      node.right = createNode(arr.shift());
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return root;
};

function createNode(val) {
  if (val === '') {
    return null;
  }
  return new TreeNode(parseInt(val));
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
