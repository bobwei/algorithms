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
  const graph = {};
  dfs(root, graph);
  return bfs(graph, target.val, k);
};

function bfs(graph, target, k) {
  const visited = new Set([target]);
  let d = 0;
  let queue = [target];
  while (queue.length) {
    if (d === k) {
      return queue;
    }
    const next = [];
    while (queue.length) {
      const u = queue.shift();
      for (const v of graph[u]) {
        if (!visited.has(v)) {
          visited.add(v);
          next.push(v);
        }
      }
    }
    d += 1;
    queue = next;
  }
  return [];
}

function dfs(root, graph) {
  if (!root) {
    return;
  }
  graph[root.val] = [];
  dfs(root.left, graph);
  dfs(root.right, graph);
  if (root.left) {
    graph[root.val].push(root.left.val);
    graph[root.left.val].push(root.val);
  }
  if (root.right) {
    graph[root.val].push(root.right.val);
    graph[root.right.val].push(root.val);
  }
}
