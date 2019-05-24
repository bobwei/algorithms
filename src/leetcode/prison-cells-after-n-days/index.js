/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  N = N % 14 > 0 ? N % 14 : 14;
  const m = cells.length;
  let state = cells;
  for (let d = 0; d < N; d++) {
    const next = new Array(m).fill(null);
    for (let i = 0; i < m; i++) {
      next[i] = (() => {
        if (i === 0 || i === m - 1) {
          return 0;
        }
        return state[i - 1] === state[i + 1] ? 1 : 0;
      })();
    }
    state = next;
  }
  return state;
};
