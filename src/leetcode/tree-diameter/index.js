/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function(edges) {
  const graph = createGraph(edges);
  const [, u] = bfs(graph, 0);
  return bfs(graph, u)[0];
};

function bfs(graph, s) {
  const visited = new Set([s]);
  let queue = [s];
  let nSteps = 0;
  let fartestNode = null;
  while (queue.length) {
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
    queue = next;
    if (next.length) {
      nSteps += 1;
      fartestNode = next[0];
    }
  }
  return [nSteps, fartestNode];
}

function createGraph(edges) {
  const graph = new Array(edges.length + 1).fill(null).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
