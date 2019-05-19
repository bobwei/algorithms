/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const output = [];
  let ptr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (shouldMerge(ptr, intervals[i])) {
      ptr = [Math.min(ptr[0], intervals[i][0]), Math.max(ptr[1], intervals[i][1])];
    } else {
      output.push(ptr);
      ptr = intervals[i];
    }
  }
  output.push(ptr);
  return output;
};

function shouldMerge(interval1, interval2) {
  if (interval1[0] > interval2[0]) {
    return shouldMerge(interval2, interval1);
  }
  return interval2[0] <= interval1[1] && interval2[1] >= interval1[0];
}
