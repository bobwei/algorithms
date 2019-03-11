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
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  const result = isFullTree(root);
  if (result.isFullTree) {
    return 2 ** result.height - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};

function isFullTree(root) {
  let ptr;
  ptr = root;
  let left = 0;
  while (ptr) {
    left += 1;
    ptr = ptr.left;
  }
  ptr = root;
  let right = 0;
  while (ptr) {
    right += 1;
    ptr = ptr.right;
  }
  return {
    height: Math.max(left, right),
    isFullTree: left === right,
  };
}
