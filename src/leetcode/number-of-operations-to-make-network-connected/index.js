/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  if (!(connections.length >= n - 1)) {
    return -1;
  }
  const graph = createGraph(n, connections);
  const visited = new Set();
  let nDisconnected = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(graph, i, visited);
      nDisconnected += 1;
    }
  }
  return nDisconnected - 1;
};

function dfs(graph, u, visited) {
  visited.add(u);
  for (const v of graph[u]) {
    if (!visited.has(v)) {
      dfs(graph, v, visited);
    }
  }
}

function createGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
