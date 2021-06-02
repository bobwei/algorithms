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
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.ptr = root;
  this.hasNext();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const node = this.stack.pop();
  this.ptr = node.right;
  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  while (this.ptr) {
    this.stack.push(this.ptr);
    this.ptr = this.ptr.left;
  }
  return this.stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
