/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (!root) {
    return [0, -1];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  const globalMax = Math.max(left[0], right[0], 2 + left[1] + right[1]);
  const localMax = 1 + Math.max(left[1], right[1]);
  return [globalMax, localMax];
}
