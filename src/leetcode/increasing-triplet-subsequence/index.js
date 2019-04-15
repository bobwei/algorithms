/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let p1 = Infinity;
  let p2 = Infinity;
  for (const n of nums) {
    if (n < p1) {
      p1 = n;
    } else if (n > p1 && n < p2) {
      p2 = n;
    } else if (n > p1 && n > p2) {
      return true;
    }
  }
  return false;
};
