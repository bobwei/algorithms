/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
  const graph = createGraph(regions);
  return findLCA(graph, region1, region2);
};

function createGraph(regions) {
  const graph = {};
  for (const region of regions) {
    for (let i = 1; i < region.length; i++) {
      graph[region[i]] = region[0];
    }
  }
  return graph;
}

function findLCA(graph, r1, r2) {
  const path = new Set();
  let p1 = r1;
  while (p1) {
    path.add(p1);
    p1 = graph[p1];
  }
  let p2 = r2;
  while (!path.has(p2)) {
    p2 = graph[p2];
  }
  return p2;
}
