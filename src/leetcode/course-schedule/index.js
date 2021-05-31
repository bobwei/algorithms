/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const visited = new Set();
  for (let i = 0; i < graph.length; i++) {
    if (hasCycle(graph, i, visited)) {
      return false;
    }
  }
  return true;
};

function hasCycle(graph, u, visited, stack = new Set()) {
  if (visited.has(u)) {
    return false;
  }
  if (stack.has(u)) {
    return true;
  }
  stack.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, visited, stack)) {
      return true;
    }
  }
  stack.delete(u);
  visited.add(u);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  for (const [v, u] of prerequisites) {
    graph[u].push(v);
  }
  return graph;
}
