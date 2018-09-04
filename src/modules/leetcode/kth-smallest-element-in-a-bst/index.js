/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
  const stack = [];
  let ptr = root;
  while (ptr || stack.length) {
    if (!ptr) {
      const node = stack.pop();
      k -= 1;
      if (k <= 0) {
        return node.val;
      }
      ptr = node.right;
    } else {
      stack.push(ptr);
      ptr = ptr.left;
    }
  }
};

export default kthSmallest;
