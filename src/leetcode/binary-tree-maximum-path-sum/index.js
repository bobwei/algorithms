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
var maxPathSum = function(root) {
  return helper(root)[1];
};

function helper(root) {
  if (!root) {
    return [-Infinity, -Infinity];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  const localMax = root.val + Math.max(left[0], right[0], 0);
  const globalMax = Math.max(root.val + left[0] + right[0], localMax, left[1], right[1]);
  return [localMax, globalMax];
}
