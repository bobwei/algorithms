/**
 * @param {number[][]} graph
 * @return {boolean}
 */

const dfs = (graph, sets, i) => {
  for (let k = 0; k < graph[i].length; k++) {
    const j = graph[i][k];
    if (sets[i] === sets[j]) {
      return false;
    }
    if (sets[j] === null) {
      sets[j] = (sets[i] + 1) % 2;
      if (!dfs(graph, sets, j)) {
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
  const sets = new Array(m).fill(null);
  for (let i = 0; i < m; i++) {
    if (sets[i] === null) {
      sets[i] = 0;
    }
    if (!dfs(graph, sets, i)) {
      return false;
    }
  }
  return true;
};
