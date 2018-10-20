/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

const inOrder = (root, result) => {
  if (!root) {
    return;
  }
  inOrder(root.left, result);
  if (result.pre && root.val < result.pre.val) {
    if (!result.first) {
      result.first = result.pre;
    }
    result.second = root;
  }
  result.pre = root;
  inOrder(root.right, result);
};

const swap = (r1, r2) => {
  const tmp = r1.val;
  r1.val = r2.val;
  r2.val = tmp;
};

var recoverTree = function(root) {
  const result = {};
  inOrder(root, result);
  swap(result.first, result.second);
};
