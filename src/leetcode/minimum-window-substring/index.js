/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const output = { str: '', length: Infinity };
  const counter = new Counter({ t });
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    counter.add(s[i]);
    while (counter.isMatched()) {
      if (i - start + 1 < output.length) {
        output.length = i - start + 1;
        output.str = s.substring(start, i + 1);
      }
      counter.delete(s[start]);
      start += 1;
    }
  }
  return output.length < Infinity ? output.str : '';
};

class Counter {
  constructor({ t }) {
    this.nRemaining = t.length;
    // prettier-ignore
    this.count = t
      .split('')
      .reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
      }, {});
  }

  isMatched() {
    return this.nRemaining <= 0;
  }

  add(c) {
    this.count[c] = (this.count[c] || 0) - 1;
    if (this.count[c] >= 0) {
      this.nRemaining -= 1;
    }
  }

  delete(c) {
    this.count[c] += 1;
    if (this.count[c] > 0) {
      this.nRemaining += 1;
    }
  }
}
