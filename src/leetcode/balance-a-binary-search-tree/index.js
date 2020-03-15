/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const arr = toArr(root);
  return createBST(arr);
};

function createBST(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  const root = new TreeNode(arr[mid]);
  root.left = createBST(arr, start, mid);
  root.right = createBST(arr, mid + 1, end);
  return root;
}

function toArr(root) {
  const output = [];
  const stack = [];
  let ptr = root;
  while (ptr || stack.length) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      const node = stack.pop();
      output.push(node.val);
      ptr = node.right;
    }
  }
  return output;
}
