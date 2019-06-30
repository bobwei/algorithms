/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const stack = new Set();
  const visited = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(graph, i, visited, stack)) {
      return [];
    }
  }
  return [...stack];
};

function hasCycle(graph, u, visited, stack) {
  if (visited.has(u)) {
    return !stack.has(u);
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, visited, stack)) {
      return true;
    }
  }
  stack.add(u);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = [...new Array(numCourses)].map(() => []);
  for (const [c1, c2] of prerequisites) {
    graph[c1].push(c2);
  }
  return graph;
}
