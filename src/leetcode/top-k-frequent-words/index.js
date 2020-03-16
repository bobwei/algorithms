/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  const rFreq = {};
  for (const word in freq) {
    if (!(freq[word] in rFreq)) rFreq[freq[word]] = [];
    rFreq[freq[word]].push(word);
  }
  for (const f in rFreq) {
    rFreq[f].sort();
  }
  const output = [];
  for (let f = words.length; f > 0; f--) {
    if (f in rFreq) {
      const max = Math.min(rFreq[f].length, k - output.length);
      for (let i = 0; i < max; i++) {
        output.push(rFreq[f][i]);
      }
    }
    if (output.length >= k) {
      break;
    }
  }
  return output;
};
