/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const m = s.length;
  let max = '';
  for (let i = 0; i < m; i++) {
    const [start, end] = helper(s, m, i);
    if (end - start + 1 > max.length) {
      max = s.substring(start, end + 1);
    }
  }
  return max;
};

function helper(s, m, start) {
  let i = start;
  let j = start;
  while (s[i] === s[j + 1]) {
    j += 1;
  }
  while (i - 1 >= 0 && j + 1 < m && s[i - 1] === s[j + 1]) {
    i -= 1;
    j += 1;
  }
  return [i, j];
}
