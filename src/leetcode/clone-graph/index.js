/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, memo = new Map()) {
  if (!node) {
    return null;
  }
  if (memo.has(node)) {
    return memo.get(node);
  }
  const copied = new Node(node.val, []);
  memo.set(node, copied);
  for (const neighbor of node.neighbors) {
    copied.neighbors.push(cloneGraph(neighbor, memo));
  }
  return copied;
};
