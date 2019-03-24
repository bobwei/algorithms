/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum, curSum = 0, selected = [], output = []) {
  if (!root) {
    return output;
  }
  if (root.left || root.right) {
    const nextSum = curSum + root.val;
    selected.push(root.val);
    pathSum(root.left, sum, nextSum, selected, output);
    pathSum(root.right, sum, nextSum, selected, output);
    selected.pop();
    return output;
  }
  if (curSum + root.val === sum) {
    output.push([...selected, root.val]);
  }
  return output;
};
