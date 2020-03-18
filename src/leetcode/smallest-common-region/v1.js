/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
  const [graph, root] = createGraph(regions);
  return findLCA(graph, root, region1, region2);
};

function createGraph(regions) {
  const graph = {};
  for (const region of regions) {
    const [first, ...places] = region;
    if (!(first in graph)) graph[first] = [];
    for (const place of places) {
      if (!(place in graph)) graph[place] = [];
      graph[first].push(place);
    }
  }
  const root = regions[0][0];
  return [graph, root];
}

function findLCA(graph, root, r1, r2) {
  if (root === r1 || root === r2) {
    return root;
  }
  const matched = [];
  for (const v of graph[root]) {
    const result = findLCA(graph, v, r1, r2);
    if (result) {
      matched.push(result);
    }
    if (matched.length >= 2) {
      return root;
    }
  }
  return matched.pop();
}
