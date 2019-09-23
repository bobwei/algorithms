/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  const output = [];
  let pre = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (isMergeable(pre, intervals[i])) {
      pre[0] = Math.min(pre[0], intervals[i][0]);
      pre[1] = Math.max(pre[1], intervals[i][1]);
    } else {
      output.push(pre);
      pre = intervals[i];
    }
  }
  output.push(pre);
  return output;
};

function isMergeable(i1, i2) {
  if (Math.max(i1[0], i2[0]) <= Math.min(i1[1], i2[1])) {
    return true;
  }
  return false;
}
