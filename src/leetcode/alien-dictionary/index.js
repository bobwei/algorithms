/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = createGraph(words);
  const visited = new Set();
  const stack = new Set();
  for (const u in graph) {
    if (hasCycle(graph, u, visited, stack)) {
      return '';
    }
  }
  return [...stack].reverse().join('');
};

function createGraph(words) {
  const graph = {};
  for (const word of words) {
    for (const c of word.split('')) {
      if (!(c in graph)) {
        graph[c] = [];
      }
    }
  }
  const n = words.length;
  for (let i = 0; i <= n - 2; i++) {
    let j = 0;
    while (words[i][j] && words[i + 1][j] && words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    const c1 = words[i][j];
    const c2 = words[i + 1][j];
    if (c1 && c2 && c1 !== c2) {
      graph[c1].push(c2);
    }
  }
  return graph;
}

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
