/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const completed = new Set();
  for (let i = 0; i < numCourses; i++) {
    if (!completed.has(i) && hasCycle(graph, i, completed)) {
      return [];
    }
  }
  return [...completed];
};

function hasCycle(graph, u, completed, visited = new Set()) {
  if (completed.has(u)) {
    return false;
  }
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, completed, visited)) {
      return true;
    }
  }
  visited.delete(u);
  completed.add(u);
  return false;
}

function createGraph(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  for (const [u, v] of prerequisites) {
    graph[u].push(v);
  }
  return graph;
}
