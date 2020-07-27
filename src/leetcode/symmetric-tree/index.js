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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root];
  while (queue.length) {
    if (!isRepeated(queue)) {
      return false;
    }
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return true;
};

function isRepeated(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const isInvalid =
      (!arr[left] && arr[right]) ||
      (arr[left] && !arr[right]) ||
      (arr[left] && arr[right] && arr[left].val !== arr[right].val);
    if (isInvalid) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}
