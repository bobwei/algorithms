/**
 * @param {string[]} words
 * @return {string}
 */

const createGraph = (words) => {
  const graph = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!graph[words[i][j]]) {
        graph[words[i][j]] = [];
      }
    }
    if (i + 1 >= words.length) break;
    const n = Math.min(words[i].length, words[i + 1].length);
    for (let j = 0; j < n; j++) {
      const c1 = words[i][j];
      const c2 = words[i + 1][j];
      if (c1 !== c2) {
        if (graph[c1].indexOf(c2) < 0) {
          graph[c1].push(c2);
        }
        break;
      }
    }
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

const toOutput = (stack) => [...stack].reverse().join('');

var alienOrder = function(words) {
  const graph = createGraph(words);
  const visited = {};
  const stack = new Set();
  for (const v in graph) {
    if (hasCycle(graph, v, visited, stack)) {
      return '';
    }
  }
  return toOutput(stack);
};
