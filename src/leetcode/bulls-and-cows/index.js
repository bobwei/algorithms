/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const freq = createFreq(secret);
  const aSet = new Set();
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      aSet.add(i);
      freq[guess[i]] -= 1;
    }
  }
  let nB = 0;
  for (let i = 0; i < guess.length; i++) {
    if (!aSet.has(i) && freq[guess[i]] > 0) {
      nB += 1;
      freq[guess[i]] -= 1;
    }
  }
  return `${aSet.size}A${nB}B`;
};

function createFreq(str) {
  const freq = {};
  for (const c of str) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
