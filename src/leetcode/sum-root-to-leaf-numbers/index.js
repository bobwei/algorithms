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
var sumNumbers = function(root, sum = 0) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return sum * 10 + root.val;
  }
  return sumNumbers(root.left, sum * 10 + root.val) + sumNumbers(root.right, sum * 10 + root.val);
};
