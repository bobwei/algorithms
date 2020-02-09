/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  const set = new Set();
  for (const val of arr) {
    if (set.has(val / 2) || set.has(2 * val)) {
      return true;
    }
    set.add(val);
  }
  return false;
};
