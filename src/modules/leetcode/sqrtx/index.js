/**
 * @param {number} x
 * @return {number}
 */
const fn = x => {
  if (!x) {
    return 0;
  }
  let low = 1;
  let high = x;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = mid * mid;
    if (result === x) {
      return mid;
    } else if (result > x) {
      high = mid - 1;
    } else if (result < x) {
      low = mid + 1;
    }
  }
  return high;
};

export default fn;
