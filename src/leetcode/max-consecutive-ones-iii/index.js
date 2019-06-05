/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  const counter = new Counter();
  let max = 0;
  let start = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      counter.inc();
    }
    while (counter.n > K) {
      if (A[start] === 0) {
        counter.dec();
      }
      start += 1;
    }
    max = Math.max(max, i - start + 1);
  }
  return max;
};

class Counter {
  constructor() {
    this.n = 0;
  }

  inc() {
    this.n += 1;
  }

  dec() {
    this.n -= 1;
  }
}
