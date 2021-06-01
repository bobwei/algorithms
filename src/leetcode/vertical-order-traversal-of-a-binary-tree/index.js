/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
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
  const map = {};
  const queue = [[root, 0, 0]];
  while (queue.length) {
    const [node, i, j] = queue.shift();
    if (!(j in map)) {
      map[j] = [];
    }
    map[j].push([node.val, i]);
    if (node.left) {
      queue.push([node.left, i + 1, j - 1]);
    }
    if (node.right) {
      queue.push([node.right, i + 1, j + 1]);
    }
  }
  const cols = Object.keys(map).sort((a, b) => parseInt(a) - parseInt(b));
  const output = [];
  for (const col of cols) {
    const arr = map[col]
      .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]))
      .map(([val]) => val);
    output.push(arr);
  }
  return output;
};
