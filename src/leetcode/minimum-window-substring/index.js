/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const counter = new Counter(t);
  let start = 0;
  let output = s.repeat(2);
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.nIncomplete <= 0) {
      const substringLength = i - start + 1;
      if (substringLength < output.length) {
        output = s.substring(start, i + 1);
      }
      counter.delete(s[start]);
      start += 1;
    }
  }
  return output.length <= s.length ? output : '';
};

class Counter {
  constructor(target) {
    this.freq = {};
    this.nIncomplete = target.length;
    for (const c of target) {
      this.freq[c] = (this.freq[c] || 0) + 1;
    }
  }

  add(c) {
    if (!(c in this.freq)) {
      return;
    }
    this.freq[c] -= 1;
    if (this.freq[c] >= 0) {
      this.nIncomplete -= 1;
    }
  }

  delete(c) {
    if (!(c in this.freq)) {
      return;
    }
    this.freq[c] += 1;
    if (this.freq[c] > 0) {
      this.nIncomplete += 1;
    }
  }
}
