/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
  const [isSorted, graph] = createGraph(words);
  if (!isSorted) {
    return '';
  }
  const output = new Set();
  for (const u in graph) {
    if (hasCycle(graph, u, output)) {
      return '';
    }
  }
  return [...output].reverse().join('');
};

function hasCycle(graph, u, output, stack = new Set()) {
  if (output.has(u)) {
    return false;
  }
  if (stack.has(u)) {
    return true;
  }
  stack.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, output, stack)) {
      return true;
    }
  }
  stack.delete(u);
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
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== words[i + 1][j]) {
        if (j < words[i].length && j >= words[i + 1].length) {
          return [false, graph];
        }
        if (words[i][j] && words[i + 1][j]) {
          graph[words[i][j]].push(words[i + 1][j]);
        }
        break;
      }
    }
  }
  return [true, graph];
}
