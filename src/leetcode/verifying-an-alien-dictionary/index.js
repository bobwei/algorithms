/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  // prettier-ignore
  const map = order
    .split('')
    .reduce((acc, cur, index) => {
      acc[cur] = index;
      return acc;
    }, {});
  for (let i = 0; i < words.length - 1; i++) {
    let j = 0;
    const m = words[i].length;
    const n = words[i + 1].length;
    while (words[i][j] === words[i + 1][j] && j < m && j < n) {
      j += 1;
    }
    if (j < m && j >= n) {
      return false;
    }
    const c1 = words[i][j];
    const c2 = words[i + 1][j];
    if (map[c1] > map[c2]) {
      return false;
    }
  }
  return true;
};
