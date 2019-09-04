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
var subtreeWithAllDeepest = function(root) {
  const { nodes } = findDeepest(root);
  return findCommonAncestor(root, new Set(nodes));
};

function findCommonAncestor(root, nodes) {
  if (!root) {
    return null;
  }
  if (nodes.has(root)) {
    return root;
  }
  const left = findCommonAncestor(root.left, nodes);
  const right = findCommonAncestor(root.right, nodes);
  if (left && right) {
    return root;
  }
  return left || right;
}

function findDeepest(root, depth = 0, output = { depth: -Infinity, nodes: [] }) {
  if (!root) {
    return output;
  }
  if (depth > output.depth) {
    output.depth = depth;
    output.nodes = [root];
  } else if (depth === output.depth) {
    output.nodes.push(root);
  }
  findDeepest(root.left, depth + 1, output);
  findDeepest(root.right, depth + 1, output);
  return output;
}
