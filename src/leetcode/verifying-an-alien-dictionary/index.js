/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const map = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    while (words[i][j] === words[i + 1][j]) {
      j += 1;
    }
    const c1 = words[i][j];
    const c2 = words[i + 1][j];
    if (!(map[c1] <= map[c2])) {
      return false;
    }
  }
  return true;
};
