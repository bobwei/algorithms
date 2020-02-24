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
var diameterOfBinaryTree = function(root) {
  return helper(root)[1];
};

function helper(root) {
  if (!root) {
    return [-1, 0];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  return [Math.max(left[0], right[0]) + 1, Math.max(left[1], right[1], left[0] + right[0] + 2)];
}
