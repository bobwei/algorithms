/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return root;
  }
  if (root.val === p.val || root.val === q.val) {
    return root;
  }
  const leftLCA = lowestCommonAncestor(root.left, p, q);
  const rightLCA = lowestCommonAncestor(root.right, p, q);
  if (leftLCA && rightLCA) {
    return root;
  }
  if (leftLCA || rightLCA) {
    return leftLCA || rightLCA;
  }
};
