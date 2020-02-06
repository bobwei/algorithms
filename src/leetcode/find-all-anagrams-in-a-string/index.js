/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const counter = new Counter(p);
  const output = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nRemaining === 0) {
      if (i - start + 1 === p.length) {
        output.push(start);
      }
      counter.delete(s[start]);
      start += 1;
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
    this.nRemaining = target.length;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) - 1;
    if (this.freq[c] >= 0) {
      this.nRemaining -= 1;
    }
  }

  delete(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    if (this.freq[c] > 0) {
      this.nRemaining += 1;
    }
  }
}
