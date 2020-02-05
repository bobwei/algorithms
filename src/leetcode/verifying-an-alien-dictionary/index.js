/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const indices = createIndices(order);
  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    while (j < words[i].length && j < words[i + 1].length && words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    if (j < words[i].length && j >= words[i + 1].length) {
      return false;
    }
    if (indices[words[i][j]] > indices[words[i + 1][j]]) {
      return false;
    }
  }
  return true;
};

function createIndices(str) {
  const indices = {};
  for (let i = 0; i < str.length; i++) {
    indices[str[i]] = i;
  }
  return indices;
}
