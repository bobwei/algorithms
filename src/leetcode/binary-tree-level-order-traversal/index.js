/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const queue = [[root, 0]];
  const levels = {};
  while (queue.length) {
    const [node, lv] = queue.shift();
    if (!(lv in levels)) levels[lv] = [];
    levels[lv].push(node.val);
    if (node.left) {
      queue.push([node.left, lv + 1]);
    }
    if (node.right) {
      queue.push([node.right, lv + 1]);
    }
  }
  return Object.values(levels);
};
