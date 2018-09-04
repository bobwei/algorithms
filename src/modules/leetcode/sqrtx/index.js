/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let i = 1;
  let j = x;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    const result = m * m;
    if (result === x) {
      return m;
    }
    if (result > x) {
      j = m - 1;
    } else if (result < x) {
      i = m + 1;
    }
  }
  return j;
};

export default mySqrt;
