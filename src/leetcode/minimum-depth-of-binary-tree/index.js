/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root, depth = 0) {
  if (!root) {
    return depth;
  }
  if (!root.left || !root.right) {
    return Math.min(minDepth(root.left || root.right, depth + 1));
  }
  return Math.min(minDepth(root.left, depth + 1), minDepth(root.right, depth + 1));
};
