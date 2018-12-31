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

/*
  Calculate local maximum at each node and also keep updating global maximum
*/
var maxPathSum = function(r) {
  let max = -Infinity;

  /*
    Return maximum path sum containing root.
  */
  const helper = (root) => {
    if (!root) {
      return 0;
    }
    const left = helper(root.left);
    const right = helper(root.right);
    const localMax = root.val + Math.max(left, right, 0);
    max = Math.max(max, localMax, root.val + left + right);
    return localMax;
  };
  helper(r);

  return max > -Infinity ? max : 0;
};
