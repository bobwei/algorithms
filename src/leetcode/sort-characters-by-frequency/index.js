/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = createReverseFreq(createFreq(s));
  let output = '';
  for (const key in map) {
    const f = parseInt(key);
    for (const c of map[key]) {
      output = c.repeat(f) + output;
    }
  }
  return output;
};

function createFreq(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}

function createReverseFreq(freq) {
  const map = {};
  for (const c in freq) {
    if (!(freq[c] in map)) {
      map[freq[c]] = [];
    }
    map[freq[c]].push(c);
  }
  return map;
}
