/**
 * @param {number[][]} graph
 * @return {boolean}
 */

const dfs = (graph, visited, sets, i) => {
  for (let k = 0; k < graph[i].length; k++) {
    const j = graph[i][k];
    if (!visited[i][j]) {
      if (sets[i] === sets[j]) {
        return false;
      }
      sets[j] = (sets[i] + 1) % 2;
      visited[i][j] = true;
      if (!dfs(graph, visited, sets, j)) {
        return false;
      }
    }
  }
  return true;
};

var isBipartite = function(graph) {
  if (!graph.length) {
    return true;
  }
  const m = graph.length;
  const visited = [...new Array(m)].map(() => new Array(m).fill(false));
  const sets = new Array(m).fill(null);
  for (let i = 0; i < m; i++) {
    if (sets[i] === null) {
      sets[i] = 0;
    }
    if (!dfs(graph, visited, sets, i)) {
      return false;
    }
  }
  return true;
};
