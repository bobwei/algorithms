/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  const { nMoves } = helper(root);
  return nMoves;
};

function helper(root) {
  if (!root) {
    return { nNodes: 0, nCoins: 0, nMoves: 0 };
  }
  const left = helper(root.left);
  const right = helper(root.right);
  const nNodes = left.nNodes + right.nNodes + 1;
  const nCoins = left.nCoins + right.nCoins + root.val;
  const nMoves = Math.abs(nCoins - nNodes) + left.nMoves + right.nMoves;
  return { nNodes, nCoins, nMoves };
}
