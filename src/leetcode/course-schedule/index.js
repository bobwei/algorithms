/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const hasCycle = (graph, v, visited = {}) => {
  if (visited[v]) {
    return true;
  }
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (hasCycle(graph, graph[v][i], visited)) {
      return true;
    }
  }
  visited[v] = false;
  return false;
};

var canFinish = function(numCourses, prerequisites) {
  const graph = [...new Array(numCourses)].map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const p = prerequisites[i];
    graph[p[0]].push(p[1]);
  }
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(graph, i)) {
      return false;
    }
  }
  return true;
};
