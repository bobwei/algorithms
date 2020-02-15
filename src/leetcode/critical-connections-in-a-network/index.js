/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const graph = createGraph(n, connections);
  return helper(graph, 0);
};

function helper(graph, u, from = null, depth = 0, visited = {}, low = {}, output = []) {
  visited[u] = depth;
  low[u] = depth;
  for (const v of graph[u]) {
    if (v === from) {
      continue;
    }
    if (!(v in visited)) {
      helper(graph, v, u, depth + 1, visited, low, output);
    }
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
