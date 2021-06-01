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
var maxPathSum = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (!root) {
    return [-Infinity, -Infinity];
  }
  const left = helper(root.left);
  const right = helper(root.right);
  const localMax = root.val + Math.max(left[1], right[1], 0);
  // prettier-ignore
  const globalMax = Math.max(
    root.val + left[1] + right[1],
    localMax,
    left[0],
    right[0],
  );
  return [globalMax, localMax];
}
