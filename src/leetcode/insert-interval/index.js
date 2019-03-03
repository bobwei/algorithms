/* global Interval */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  const output = [];
  let i2 = newInterval;
  for (const i1 of intervals) {
    const isMergeNeeded = i1.end >= i2.start && i1.start <= i2.end;
    if (isMergeNeeded) {
      const tmp = new Interval();
      tmp.start = Math.min(i1.start, i2.start);
      tmp.end = Math.max(i1.end, i2.end);
      i2 = tmp;
    } else {
      output.push(i1.start < i2.start ? i1 : i2);
      i2 = i1.start > i2.start ? i1 : i2;
    }
  }
  output.push(i2);
  return output;
};
