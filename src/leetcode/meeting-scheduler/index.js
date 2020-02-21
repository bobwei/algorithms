/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
  slots1.sort(comparator);
  slots2.sort(comparator);
  let t1 = 0;
  let t2 = 0;
  while (t1 < slots1.length && t2 < slots2.length) {
    const merged = [Math.max(slots1[t1][0], slots2[t2][0]), Math.min(slots1[t1][1], slots2[t2][1])];
    if (merged[0] < merged[1] && merged[1] - merged[0] >= duration) {
      return [merged[0], merged[0] + duration];
    }
    if (slots1[t1][1] < slots2[t2][1]) {
      t1 += 1;
    } else {
      t2 += 1;
    }
  }
  return [];
};

function comparator(a, b) {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
}
