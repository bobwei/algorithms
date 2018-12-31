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

const maxTreeSum = (r) => {
  let globalMax = -Infinity;
  const helper = (root) => {
    if (!root) {
      return 0;
    }
    const left = helper(root.left);
    const right = helper(root.right);
    const localMax = Math.max(root.val, root.val + left, root.val + right);
    globalMax = Math.max(globalMax, localMax, root.val + left + right);
    return localMax;
  };
  helper(r);
  return globalMax > -Infinity ? globalMax : 0;
};

var maxPathSum = function(root) {
  return maxTreeSum(root);
};
