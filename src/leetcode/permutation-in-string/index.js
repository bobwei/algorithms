/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const counter = new Counter(s1);
  let start = 0;
  for (let i = 0; i < s2.length; i++) {
    counter.add(s2[i]);
    while (counter.n === 0) {
      if (i - start + 1 === s1.length) {
        return true;
      }
      counter.delete(s2[start++]);
    }
  }
  return false;
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
    this.counts[c] = this.counts[c] + 1;
    if (this.counts[c] > 0) {
      this.n += 1;
    }
  }
}
