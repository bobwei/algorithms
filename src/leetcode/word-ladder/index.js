/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) < 0) {
    return 0;
  }
  const arr = [beginWord, ...wordList];
  const m = arr.length;
  const graph = createGraph(arr, m);
  const dist = new Array(m).fill(Infinity);
  dist[0] = 0;
  const queue = [0];
  while (queue.length) {
    const u = queue.shift();
    if (arr[u] === endWord) {
      return dist[u] + 1;
    }
    for (const v of graph[u]) {
      if (dist[u] + 1 < dist[v]) {
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
  return 0;
};

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
