/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => a.start - b.start);
  const output = [];
  let pre = intervals.shift();
  while (intervals.length || pre) {
    const next = intervals.shift();
    if (next && pre.end >= next.start) {
      pre.start = Math.min(pre.start, next.start);
      pre.end = Math.max(pre.end, next.end);
    } else {
      output.push(pre);
      pre = next;
    }
  }
  return output;
};
