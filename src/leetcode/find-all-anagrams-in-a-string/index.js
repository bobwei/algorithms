/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const output = [];
  const counter = new Counter(p);
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nUnmatched > 0) {
      counter.delete(s[start]);
      start += 1;
    }
    if (i - start + 1 === p.length) {
      output.push(start);
    }
  }
  return output;
};

class Counter {
  constructor(target) {
    this.freq = {};
    for (const c of target) {
      this.freq[c] = (this.freq[c] || 0) + 1;
    }
    this.nUnmatched = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) - 1;
    if (this.freq[c] < 0) {
      this.nUnmatched += 1;
    }
  }

  delete(c) {
    this.freq[c] += 1;
    if (this.freq[c] <= 0) {
      this.nUnmatched -= 1;
    }
  }
}
