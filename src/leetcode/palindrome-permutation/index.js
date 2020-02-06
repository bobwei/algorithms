/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  let nOdds = 0;
  for (const c in freq) {
    if (freq[c] % 2 === 1) {
      nOdds += 1;
    }
    if (nOdds > 1) {
      return false;
    }
  }
  return true;
};
