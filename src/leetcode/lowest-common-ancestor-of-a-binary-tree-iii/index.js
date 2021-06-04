/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
  const path = findPathToRoot(p);
  let ptr = q;
  while (ptr) {
    if (path.has(ptr.val)) {
      return ptr;
    }
    ptr = ptr.parent;
  }
  return null;
};

function findPathToRoot(p) {
  const path = new Set();
  let ptr = p;
  while (ptr) {
    path.add(ptr.val);
    ptr = ptr.parent;
  }
  return path;
}
