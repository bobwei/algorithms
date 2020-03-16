/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const counter = new Counter();
  let start = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nRequiredOps > k) {
      counter.delete(s[start]);
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.freq = {};
    this.max = 0;
    this.nTotal = 0;
  }

  add(c) {
    this.freq[c] = (this.freq[c] || 0) + 1;
    this.max = Math.max(this.max, this.freq[c]);
    this.nTotal += 1;
  }

  delete(c) {
    this.freq[c] -= 1;
    const base = 'a'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(base + i);
      this.max = Math.max(this.max, this.freq[char] || 0);
    }
    this.nTotal -= 1;
  }

  get nRequiredOps() {
    return this.nTotal - this.max;
  }
}
