/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = [...new Array(numCourses)].map(() => []);
  for (const [u, v] of prerequisites) {
    graph[v].push(u + '');
  }
  const visited = new Set();
  const stack = new Set();
  for (const u in graph) {
    if (hasCycle(graph, u, visited, stack)) {
      return [];
    }
  }
  return [...stack].reverse();
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
