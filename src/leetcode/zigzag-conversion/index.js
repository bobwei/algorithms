/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, n) {
  if (n <= 1) {
    return s;
  }
  const rows = {};
  for (let i = 0; i < n; i++) {
    rows[i] = [];
  }
  rows[0].push(s[0]);
  let i = 0;
  let r = 0;
  while (i < s.length) {
    for (let j = 0; j < n - 1; j++) {
      i += 1;
      r += 1;
      rows[r].push(s[i]);
    }
    for (let j = 0; j < n - 1; j++) {
      i += 1;
      r -= 1;
      rows[r].push(s[i]);
    }
  }
  return Object.values(rows)
    .map((strs) => strs.join(''))
    .join('');
};
