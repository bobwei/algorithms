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
var verticalTraversal = function(root) {
  if (!root) {
    return [];
  }
  const queue = [[root, 0, 0]];
  const cols = {};
  while (queue.length) {
    const [node, x, y] = queue.shift();
    if (!(x in cols)) cols[x] = [];
    cols[x].push([node.val, y]);
    if (node.left) {
      queue.push([node.left, x - 1, y + 1]);
    }
    if (node.right) {
      queue.push([node.right, x + 1, y + 1]);
    }
  }
  const keys = Object.keys(cols)
    .map((c) => parseInt(c))
    .sort((a, b) => a - b);
  const output = [];
  for (const x of keys) {
    cols[x].sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
    output.push(cols[x].map(([val]) => val));
  }
  return output;
};
