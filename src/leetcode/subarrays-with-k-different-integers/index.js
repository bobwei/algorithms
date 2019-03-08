/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
  return atMostK(A, K) - atMostK(A, K - 1);
};

function atMostK(A, K) {
  const set = new DistinctSet();
  let start = 0;
  let output = 0;
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    while (set.size > K) {
      set.delete(A[start]);
      start += 1;
    }
    output += i - start + 1;
  }
  return output;
}

class DistinctSet {
  constructor() {
    this.nDistinct = 0;
    this.map = {};
  }

  add(key) {
    if (!this.map[key]) {
      this.nDistinct += 1;
    }
    this.map[key] = (this.map[key] || 0) + 1;
  }

  delete(key) {
    this.map[key] -= 1;
    if (!this.map[key]) {
      this.nDistinct -= 1;
    }
  }

  get size() {
    return this.nDistinct;
  }
}
