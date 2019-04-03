/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const freq = words.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const map = Object.entries(freq).reduce((acc, [w, count]) => {
    if (!(count in acc)) acc[count] = [];
    acc[count].push(w);
    return acc;
  }, {});
  for (const count in map) {
    map[count].sort();
  }
  const output = [];
  for (let f = words.length; f >= 0; f--) {
    if (f in map) {
      output.push(...map[f].slice(0, k - output.length));
      if (output.length >= k) {
        return output;
      }
    }
  }
  return output;
};
