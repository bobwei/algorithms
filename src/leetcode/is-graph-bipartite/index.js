/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const visited = {};
  for (let i = 0; i < graph.length; i++) {
    if (!(i in visited) && !dfs(graph, i, 0, visited)) {
      return false;
    }
  }
  return true;
};

function dfs(graph, u, value, visited) {
  if (u in visited) {
    return visited[u] === value;
  }
  visited[u] = value;
  for (const v of graph[u]) {
    if (!dfs(graph, v, (value + 1) % 2, visited)) {
      return false;
    }
  }
  return true;
}
