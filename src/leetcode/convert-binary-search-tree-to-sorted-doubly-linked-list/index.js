/* global Node */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if (!root) {
    return null;
  }
  const dummy = new Node();
  const queue = [];
  let ptr = root;
  let pre = dummy;
  while (ptr || queue.length) {
    if (ptr) {
      queue.push(ptr);
      ptr = ptr.left;
    } else {
      const node = queue.pop();
      if (node.right) {
        ptr = node.right;
      }
      node.left = pre;
      pre.right = node;
      pre = node;
    }
  }
  dummy.right.left = pre;
  pre.right = dummy.right;
  return dummy.right;
};
