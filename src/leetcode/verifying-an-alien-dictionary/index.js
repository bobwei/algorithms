/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const seq = createSeq(order);
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== words[i + 1][j]) {
        if (j >= words[i + 1].length || seq[words[i][j]] > seq[words[i + 1][j]]) {
          return false;
        }
        break;
      }
    }
  }
  return true;
};

function createSeq(order) {
  const seq = {};
  for (let i = 0; i < order.length; i++) {
    seq[order[i]] = i;
  }
  return seq;
}
