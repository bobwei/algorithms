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
  const queue = [];
  let ptr = root;
  let pre = null;
  const dummy = new Node();
  let lptr = dummy;
  while (ptr || queue.length) {
    if (ptr) {
      queue.push(ptr);
      ptr = ptr.left;
    } else {
      const node = queue.pop();
      if (node.right) {
        ptr = node.right;
      }
      pre = node;
      lptr.right = node;
      node.left = lptr;
      lptr = lptr.right;
    }
  }
  pre.right = dummy.right;
  dummy.right.left = pre;
  return dummy.right;
};
