/**
 * @param {number} N
 * @return {number}
 */
const map = {
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [0, 3, 9],
  5: [],
  6: [0, 1, 7],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4],
  0: [4, 6],
};

var knightDialer = function(N) {
  let pre = new Array(10).fill(1);
  for (let i = 1; i < N; i++) {
    const next = new Array(10).fill(0);
    for (let j = 0; j < 10; j++) {
      for (const neighbor of map[j]) {
        next[j] += mod(pre[neighbor]);
      }
    }
    pre = next;
  }
  return mod(pre.reduce((acc, cur) => acc + cur, 0));
};

function mod(n) {
  return n % (10 ** 9 + 7);
}
