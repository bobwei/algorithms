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
  const nConsecutive = isSeq(pre, root) ? n + 1 : 1;
  max = Math.max(max, nConsecutive);
  return Math.max(
    longestConsecutive(root.left, root, nConsecutive, max),
    longestConsecutive(root.right, root, nConsecutive, max),
  );
};

function isSeq(pre, root) {
  if (!pre) {
    return false;
  }
  return pre.val + 1 === root.val;
}
