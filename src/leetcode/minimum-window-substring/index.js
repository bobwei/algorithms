/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const counter = new Counter(t);
  let start = 0;
  let min = Infinity;
  let str = '';
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nRemaining <= 0) {
      if (i - start + 1 < min) {
        min = i - start + 1;
        str = s.substring(start, i + 1);
      }
      counter.delete(s[start]);
      start += 1;
    }
  }
  return min < Infinity ? str : '';
};

class Counter {
  constructor(t) {
    this.nRemaining = t.length;
    this.freq = {};
    for (const c of t) {
      this.freq[c] = (this.freq[c] || 0) + 1;
    }
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) - 1;
    if (this.freq[c] >= 0) {
      this.nRemaining -= 1;
    }
  }

  delete(c) {
    this.freq[c] += 1;
    if (this.freq[c] > 0) {
      this.nRemaining += 1;
    }
  }
}
