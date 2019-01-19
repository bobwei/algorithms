/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

const createGraph = (numCourses, prerequisites) => {
  const graph = [...new Array(numCourses)].map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const [c1, c2] = prerequisites[i];
    graph[c2].push(c1);
  }
  return graph;
};

const hasCycle = (graph, v, visited, stack) => {
  if (visited[v]) {
    return !stack.has(v);
  }
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (hasCycle(graph, graph[v][i], visited, stack)) {
      return true;
    }
  }
  stack.add(v);
  return false;
};

var findOrder = function(numCourses, prerequisites) {
  const graph = createGraph(numCourses, prerequisites);
  const visited = {};
  const stack = new Set();
  for (let i = 0; i < graph.length; i++) {
    if (hasCycle(graph, i, visited, stack)) {
      return [];
    }
  }
  return [...stack].reverse();
};
