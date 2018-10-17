/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(
  preorder,
  inorder,
  i = 0,
  j = preorder.length - 1,
  m = 0,
  n = inorder.length - 1,
) {
  if (i > j || m > n) {
    return null;
  }
  const root = new TreeNode(preorder[i]);
  const r = inorder.indexOf(preorder[i]);
  root.left = buildTree(preorder, inorder, i + 1, i + r - m, m, r - 1);
  root.right = buildTree(preorder, inorder, i + r - m + 1, j, r + 1, n);
  return root;
};
