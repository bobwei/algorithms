/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  return counter(root, k);
};

function counter(...args) {
  let output;

  (function count(root, k) {
    if (!root) {
      return 0;
    }
    const left = count(root.left, k);
    const right = count(root.right, k - (left + 1));
    if (left + 1 === k) {
      output = root.val;
    }
    return left + right + 1;
  })(...args);

  return output;
}
