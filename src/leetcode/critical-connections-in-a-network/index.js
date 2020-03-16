/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const graph = createGraph(n, connections);
  const visited = {};
  const low = {};
  return helper(graph, 0, null, 0, visited, low);
};

function helper(graph, u, pre, rank, visited, low, output = []) {
  if (u in visited) {
    return output;
  }
  visited[u] = rank;
  low[u] = rank;
  for (const v of graph[u]) {
    if (v === pre) continue;
    helper(graph, v, u, rank + 1, visited, low, output);
    low[u] = Math.min(low[u], low[v]);
    if (low[v] > visited[u]) {
      output.push([u, v]);
    }
  }
  return output;
}

function createGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
