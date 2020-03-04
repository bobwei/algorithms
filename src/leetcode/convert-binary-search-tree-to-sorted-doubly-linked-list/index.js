/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
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
  const stack = [];
  let pre = dummy;
  let ptr = root;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      node.left = pre;
      pre.right = node;
      pre = node;
      ptr = node.right;
    }
  }
  dummy.right.left = pre;
  pre.right = dummy.right;
  return dummy.right;
};
