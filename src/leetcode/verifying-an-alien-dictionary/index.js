/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const indexes = {};
  for (let i = 0; i < order.length; i++) {
    indexes[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const n = Math.min(words[i].length, words[i + 1].length);
    let j = 0;
    while (words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    const c1 = words[i][j];
    const c2 = words[i + 1][j];
    if (!c1) break;
    if (!c2) return false;
    if (indexes[c1] > indexes[c2]) return false;
  }
  return true;
};
