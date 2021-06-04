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
var verticalOrder = function(root) {
  if (!root) {
    return [];
  }
  const map = {};
  const queue = [[root, 0]];
  let min = Infinity;
  let max = -Infinity;
  while (queue.length) {
    const [node, j] = queue.shift();
    min = Math.min(min, j);
    max = Math.max(max, j);
    if (!(j in map)) {
      map[j] = [];
    }
    map[j].push(node.val);
    if (node.left) {
      queue.push([node.left, j - 1]);
    }
    if (node.right) {
      queue.push([node.right, j + 1]);
    }
  }
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(map[i]);
  }
  return output;
};
