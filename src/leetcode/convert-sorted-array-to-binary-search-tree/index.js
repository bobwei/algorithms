/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, i = 0, j = nums.length - 1) {
  if (i > j) {
    return null;
  }
  const mid = Math.floor((i + j) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, i, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, j);
  return root;
};
