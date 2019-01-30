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
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const output = [];
  let queue = [root];
  while (queue.length) {
    output.push(queue.map((el) => el.val));
    let q = [];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    queue = q;
  }
  return output;
};
