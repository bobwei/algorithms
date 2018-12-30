/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
    return [];
  }
  const queue = [[0, root]];
  const levels = {};
  const output = [];
  while (queue.length) {
    const [lv, node] = queue.shift();
    if (!levels[lv]) {
      levels[lv] = true;
      output.push(node.val);
    }
    if (node.right) {
      queue.push([lv + 1, node.right]);
    }
    if (node.left) {
      queue.push([lv + 1, node.left]);
    }
  }
  return output;
};
