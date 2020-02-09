/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const f1 = createFreq(s);
  const f2 = createFreq(t);
  const nEquals = count(f1, f2);
  return s.length - nEquals;
};

function createFreq(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}

function count(f1, f2) {
  let n = 0;
  for (const c in f1) {
    n += Math.min(f1[c], f2[c] || 0);
  }
  return n;
}
