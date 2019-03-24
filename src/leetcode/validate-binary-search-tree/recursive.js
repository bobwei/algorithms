/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }
  const isValid = min < root.val && root.val < max;
  if (!isValid) {
    return false;
  }
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
