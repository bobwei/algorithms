/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const counter = new Counter();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nDistincts > k) {
      counter.delete(s[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.nTotal = 0;
    this.nDuplicates = 0;
    this.count = {};
  }

  add(c) {
    this.count[c] = (this.count[c] || 0) + 1;
    this.nTotal += 1;
    if (this.count[c] > 1) {
      this.nDuplicates += 1;
    }
  }

  delete(c) {
    this.count[c] -= 1;
    this.nTotal -= 1;
    if (this.count[c] >= 1) {
      this.nDuplicates -= 1;
    }
  }

  get nDistincts() {
    return this.nTotal - this.nDuplicates;
  }
}
