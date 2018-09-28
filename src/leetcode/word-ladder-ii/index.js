/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

const isTransformedWord = (w1, w2) => {
  let nDiff = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      nDiff += 1;
    }
    if (nDiff > 1) {
      return false;
    }
  }
  return true;
};

const dfs = (graph, start, end, min, selected = [start], output = []) => {
  if (selected.length >= min) {
    if (start === end) {
      output.push([...selected]);
    }
    return output;
  }
  if (!graph[start]) {
    return output;
  }
  const nodes = [...graph[start]];
  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i];
    selected.push(next);
    dfs(graph, next, end, min, selected, output);
    selected.pop();
  }
  return output;
};

const findLadders = function(beginWord, endWord, wordList) {
  const visited = {
    [beginWord]: 0,
  };
  const graph = {};
  const queue = [beginWord];
  while (queue.length) {
    const word = queue.shift();
    const n = visited[word] || 0;
    for (let i = 0; i < wordList.length; i++) {
      if (isTransformedWord(word, wordList[i])) {
        const nextN = n + 1;
        if (nextN <= (visited[wordList[i]] || Infinity)) {
          queue.push(wordList[i]);
          visited[wordList[i]] = nextN;
          if (!graph[word]) {
            graph[word] = new Set();
          }
          graph[word].add(wordList[i]);
        }
      }
    }
  }
  const min = visited[endWord] + 1;
  return min ? dfs(graph, beginWord, endWord, min) : [];
};

export default findLadders;
