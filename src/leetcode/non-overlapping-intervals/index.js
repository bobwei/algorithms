/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let pre = 0;
  let nRemoved = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (isOverlapped(intervals[pre], intervals[i])) {
      nRemoved += 1;
      pre = intervals[pre][1] < intervals[i][1] ? pre : i;
    } else {
      pre = i;
    }
  }
  return nRemoved;
};

function isOverlapped(interval1, interval2) {
  return interval2[0] < interval1[1];
}
