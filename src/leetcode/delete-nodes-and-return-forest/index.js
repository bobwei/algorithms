/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  if (!root) {
    return [];
  }
  const set = new Set(to_delete);
  const output = [];
  if (!set.has(root.val)) {
    output.push(root);
  }
  helper(root, set, output);
  return output;
};

function helper(root, set, output) {
  if (!root) {
    return root;
  }
  if (set.has(root.val)) {
    if (root.left && !set.has(root.left.val)) {
      output.push(root.left);
    }
    if (root.right && !set.has(root.right.val)) {
      output.push(root.right);
    }
    helper(root.left, set, output);
    helper(root.right, set, output);
    return null;
  }
  root.left = helper(root.left, set, output);
  root.right = helper(root.right, set, output);
  return root;
}
