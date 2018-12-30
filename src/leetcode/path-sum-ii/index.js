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
var pathSum = function(root, sum, selected = [], currentSum = 0, output = []) {
  if (!root) {
    return output;
  }
  if (root.left || root.right) {
    selected.push(root.val);
    const nextSum = currentSum + root.val;
    pathSum(root.left, sum, selected, nextSum, output);
    pathSum(root.right, sum, selected, nextSum, output);
    selected.pop();
    return output;
  }
  if (currentSum + root.val === sum) {
    output.push([...selected, root.val]);
  }
  return output;
};
