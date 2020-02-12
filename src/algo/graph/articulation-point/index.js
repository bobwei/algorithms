function getArticulationPoints(numNodes, edges) {
  const graph = createGraph(numNodes, edges);
  return dfs(graph, 0);
}

function dfs(graph, u, from = null, depth = 0, visited = {}, low = {}, output = new Set()) {
  visited[u] = depth;
  low[u] = depth;
  let nChildren = 0;
  for (const v of graph[u]) {
    if (v === from) {
      continue;
    }
    if (!(v in visited)) {
      nChildren += 1;
      dfs(graph, v, u, depth + 1, visited, low, output);
    }
    low[u] = Math.min(low[u], low[v]);
    const isArticulationPoint =
      (from === null && nChildren >= 2) || (from !== null && low[v] >= visited[u]);
    if (isArticulationPoint) {
      output.add(u);
    }
  }
  return output;
}

function createGraph(numNodes, edges) {
  const graph = new Array(numNodes).fill(null).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

(() => {
  // prettier-ignore
  const data = [
    7,
    [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]],
  ];
  console.log(getArticulationPoints(...data));
})();

(() => {
  // prettier-ignore
  const data = [
    10,
    [[0, 1], [1, 2], [1, 3], [3, 4], [4, 0], [0, 5], [5, 6], [6, 7], [7, 5], [7, 8], [7, 9]],
  ];
  console.log(getArticulationPoints(...data));
})();
