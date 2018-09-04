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

const isBalancedBT = (root) => {
  if (!root) {
    return {
      isBalanced: true,
      height: -1,
    };
  }

  const left = isBalancedBT(root.left);
  if (!left.isBalanced) {
    return {
      isBalanced: false,
      height: left.height + 1,
    };
  }

  const right = isBalancedBT(root.right);
  if (!right.isBalanced) {
    return {
      isBalanced: false,
      height: right.height + 1,
    };
  }

  const isBalanced = Math.abs(left.height - right.height) <= 1;
  return {
    isBalanced,
    height: Math.max(left.height, right.height) + 1,
  };
};

var isBalanced = function(root) {
  return isBalancedBT(root).isBalanced;
};
