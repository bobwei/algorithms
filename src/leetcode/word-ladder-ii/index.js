/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) < 0) {
    return [];
  }
  const arr = [...new Set([beginWord, ...wordList])];
  const m = arr.length;
  const graph = createGraph(arr, m);
  const dist = new Array(m).fill(null).map(() => [Infinity, []]);
  dist[0] = [0, []];
  const queue = [0];
  while (queue.length) {
    const u = queue.shift();
    if (arr[u] !== endWord || (arr[u] === endWord && dist[u][0] < Infinity)) {
      for (const v of graph[u]) {
        if (dist[u][0] + 1 < dist[v][0]) {
          dist[v][0] = dist[u][0] + 1;
          dist[v][1] = [];
          queue.push(v);
        }
        if (dist[u][0] + 1 === dist[v][0]) {
          dist[v][1].push(u);
        }
      }
    }
  }
  return dfs(dist, arr.indexOf(endWord), arr);
};

function dfs(graph, u, arr, selected = [], output = []) {
  if (u === 0) {
    output.push([...selected, arr[u]].reverse());
    return output;
  }
  for (const v of graph[u][1]) {
    selected.push(arr[u]);
    dfs(graph, v, arr, selected, output);
    selected.pop();
  }
  return output;
}

function createGraph(arr, m) {
  const graph = new Array(m).fill(null).map(() => []);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      if (canTransform(arr[i], arr[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }
  return graph;
}

function canTransform(str1, str2) {
  let nDiff = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      nDiff += 1;
    }
    if (nDiff > 1) {
      return false;
    }
  }
  return true;
}
