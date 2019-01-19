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

const sort = (graph) => {
  const visited = new Array(graph.length).fill(false);
  const stack = new Set();
  for (let i = 0; i < graph.length; i++) {
    if (hasCycle(graph, i, visited, stack)) {
      return [];
    }
  }
  return [...stack].reverse();
};

export default sort;
