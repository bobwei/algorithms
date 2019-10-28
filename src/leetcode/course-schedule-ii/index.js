/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const visited = new Set();
  const output = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(graph, i, visited, output)) {
      return [];
    }
  }
  return [...output];
};

function hasCycle(graph, u, visited, output) {
  if (visited.has(u)) {
    return !output.has(u);
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, visited, output)) {
      return true;
    }
  }
  output.add(u);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = [...new Array(numCourses)].map(() => []);
  for (const [c1, c2] of prerequisites) {
    graph[c1].push(c2);
  }
  return graph;
}
