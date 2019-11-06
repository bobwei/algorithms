class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

function bfs(root) {
  if (!root) {
    return [null];
  }
  const output = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    output.push(node ? node.val : node);
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return output;
}

const root = createBST([1, 2, 3, 4, 5, 6, 7]);
console.log(bfs(root));
