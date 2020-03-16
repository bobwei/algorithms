/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let output = Infinity;
  let ptr = root;
  while (ptr) {
    output = Math.abs(ptr.val - target) < Math.abs(output - target) ? ptr.val : output;
    if (target < ptr.val) {
      ptr = ptr.left;
    } else {
      ptr = ptr.right;
    }
  }
  return output;
};
