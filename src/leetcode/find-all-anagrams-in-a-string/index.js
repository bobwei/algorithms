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
    while (counter.n === 0) {
      if (i - start + 1 === p.length) {
        output.push(start);
      }
      counter.delete(s[start++]);
    }
  }
  return output;
};

class Counter {
  constructor(target) {
    this.n = target.length;
    this.counts = target.split('').reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }

  add(c) {
    this.counts[c] = (this.counts[c] || 0) - 1;
    if (this.counts[c] >= 0) {
      this.n -= 1;
    }
  }

  delete(c) {
    this.counts[c] += 1;
    if (this.counts[c] > 0) {
      this.n += 1;
    }
  }
}
