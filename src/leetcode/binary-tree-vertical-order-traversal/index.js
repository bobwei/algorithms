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
  const cols = {};
  const queue = [[root, 0]];
  let min = Infinity;
  let max = -Infinity;
  while (queue.length) {
    const [node, j] = queue.shift();
    if (!(j in cols)) cols[j] = [];
    cols[j].push(node.val);
    if (node.left) {
      queue.push([node.left, j - 1]);
    }
    if (node.right) {
      queue.push([node.right, j + 1]);
    }
    min = Math.min(min, j);
    max = Math.max(max, j);
  }
  const output = [];
  for (let j = min; j <= max; j++) {
    output.push(cols[j]);
  }
  return output;
};
