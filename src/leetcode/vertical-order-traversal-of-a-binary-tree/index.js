/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root) {
    return [];
  }
  const cols = {};
  const queue = [[root, 0, 0]];
  while (queue.length) {
    const [node, i, j] = queue.shift();
    if (!(j in cols)) cols[j] = [];
    cols[j].push([node.val, i, j]);
    if (node.left) {
      queue.push([node.left, i + 1, j - 1]);
    }
    if (node.right) {
      queue.push([node.right, i + 1, j + 1]);
    }
  }
  return Object.keys(cols)
    .map((c) => parseInt(c))
    .sort((a, b) => a - b)
    .map((key) => sort(cols[key]))
    .map((arr) => arr.map(prop(0)));
};

function sort(arr) {
  return arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    if (a[2] !== b[2]) {
      return a[2] - b[2];
    }
    return a[0] - b[0];
  });
}

function prop(key) {
  return (obj) => {
    return obj[key];
  };
}
