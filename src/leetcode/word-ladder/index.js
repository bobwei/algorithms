/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const isSibling = (w1, w2) => {
  if (w1.length !== w2.length) {
    return false;
  }
  let n = 0;
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      n += 1;
    }
    if (n > 1) {
      return false;
    }
  }
  return true;
};

var ladderLength = function(beginWord, endWord, wordList) {
  const n = wordList.length;
  const visited = {};
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [w1, d] = queue.shift();
    for (const w2 of wordList) {
      if (visited[w2]) continue;
      if (isSibling(w1, w2)) {
        if (w2 === endWord) {
          return d + 1;
        }
        visited[w2] = true;
        queue.push([w2, d + 1]);
      }
    }
  }
  return 0;
};
