/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
  const graph = createGraph(N, edges);
  const counts = new Array(N).fill(0);
  const dists = new Array(N).fill(0);
  getCount(graph, 0, -1, counts);
  dists[0] = getDist(graph, 0, -1, counts, dists);
  return transferDist(N, graph, 0, -1, counts, dists);
};

function transferDist(N, graph, u, pre, counts, dists) {
  if (pre >= 0) {
    const nRight = counts[u];
    const nLeft = N - nRight;
    dists[u] = dists[pre] - nRight + nLeft;
  }
  for (const v of graph[u]) {
    if (v !== pre) {
      transferDist(N, graph, v, u, counts, dists);
    }
  }
  return dists;
}

function getDist(graph, u, pre, counts) {
  let sum = 0;
  for (const v of graph[u]) {
    if (v !== pre) {
      sum += counts[v] + getDist(graph, v, u, counts);
    }
  }
  return sum;
}

function getCount(graph, u, pre, counts) {
  let sum = 1;
  for (const v of graph[u]) {
    if (v !== pre) {
      sum += getCount(graph, v, u, counts);
    }
  }
  counts[u] = sum;
  return sum;
}

function createGraph(N, edges) {
  const graph = new Array(N).fill(null).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}
