/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const graph = createGraph(n, edges);
  const visited = new Set();
  if (hasCycle(graph, 0, null, visited)) {
    return false;
  }
  return visited.size === n;
};

function hasCycle(graph, u, pre, visited) {
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (v === pre) continue;
    if (hasCycle(graph, v, u, visited)) {
      return true;
    }
  }
  return false;
}

function createGraph(n, edges) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
