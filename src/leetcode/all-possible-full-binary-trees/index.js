/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  if (N % 2 === 0) {
    return [];
  }
  if (N === 1) {
    return [new TreeNode(0)];
  }
  const output = [];
  for (let i = 1; i <= N - 2; i += 2) {
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(N - 1 - i);
    for (const leftNode of left) {
      for (const rightNode of right) {
        const root = new TreeNode(0);
        root.left = leftNode;
        root.right = rightNode;
        output.push(root);
      }
    }
  }
  return output;
};
