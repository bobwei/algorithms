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
var longestConsecutive = function(root, pre = null, n = 0, max = 0) {
  if (!root) {
    return max;
  }
  const nConsecutive = pre && root.val === pre.val + 1 ? n + 1 : 1;
  max = Math.max(max, nConsecutive);
  return Math.max(
    longestConsecutive(root.left, root, nConsecutive, max),
    longestConsecutive(root.right, root, nConsecutive, max),
  );
};
