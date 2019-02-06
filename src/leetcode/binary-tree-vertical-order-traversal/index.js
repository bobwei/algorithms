/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) {
    return [];
  }
  const columns = {};
  let min = 0;
  let max = 0;
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, col] = queue.shift();
    min = Math.min(min, col);
    max = Math.max(max, col);
    if (!(col in columns)) columns[col] = [];
    columns[col].push(node.val);
    if (node.left) {
      queue.push([node.left, col - 1]);
    }
    if (node.right) {
      queue.push([node.right, col + 1]);
    }
  }
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(columns[i]);
  }
  return output;
};
