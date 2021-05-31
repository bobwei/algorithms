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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
    return [];
  }
  const output = [];
  let queue = [root];
  while (queue.length) {
    output.push(queue[queue.length - 1].val);
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) {
        next.push(node.left);
      }
      if (node.right) {
        next.push(node.right);
      }
    }
    queue = next;
  }
  return output;
};
