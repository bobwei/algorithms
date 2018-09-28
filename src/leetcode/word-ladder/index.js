/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
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

const ladderLength = function(beginWord, endWord, wordList) {
  const visited = {
    [beginWord]: 0,
  };
  const queue = [beginWord];
  while (queue.length) {
    const word = queue.shift();
    const n = visited[word];
    for (let i = 0; i < wordList.length; i++) {
      if (isTransformedWord(word, wordList[i])) {
        const nextN = n + 1;
        if (nextN < (visited[wordList[i]] || Infinity)) {
          visited[wordList[i]] = nextN;
          queue.push(wordList[i]);
        }
        if (wordList[i] === endWord) {
          return visited[wordList[i]] + 1;
        }
      }
    }
  }
  return 0;
};

export default ladderLength;
