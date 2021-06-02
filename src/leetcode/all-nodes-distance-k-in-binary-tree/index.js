/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  const path = new Set();
  findPath(root, target, path);
  return dfs(root, path, path.size - 1, k);
};

function dfs(root, path, dist, k, output = []) {
  if (!root) {
    return output;
  }
  if (dist === k) {
    output.push(root.val);
  }
  if (root.left) {
    const d = path.has(root.left.val) ? dist - 1 : dist + 1;
    dfs(root.left, path, d, k, output);
  }
  if (root.right) {
    const d = path.has(root.right.val) ? dist - 1 : dist + 1;
    dfs(root.right, path, d, k, output);
  }
  return output;
}

function findPath(root, target, path) {
  if (!root) {
    return false;
  }
  path.add(root.val);
  if (root.val === target.val) {
    return true;
  }
  if (findPath(root.left, target, path)) {
    return true;
  }
  if (findPath(root.right, target, path)) {
    return true;
  }
  path.delete(root.val);
  return false;
}
