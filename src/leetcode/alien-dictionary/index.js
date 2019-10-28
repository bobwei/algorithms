/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const graph = createGraph(words);
  const visited = new Set();
  const output = new Set();
  for (const u in graph) {
    if (hasCycle(graph, u, visited, output)) {
      return '';
    }
  }
  return [...output].reverse().join('');
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

function createGraph(words) {
  const graph = {};
  for (const word of words) {
    for (const c of word) {
      graph[c] = [];
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    while (j < words[i].length && j < words[i + 1].length && words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    if (j < words[i].length) {
      const c = words[i][j];
      graph[c].push(words[i + 1][j]);
    }
  }
  return graph;
}
