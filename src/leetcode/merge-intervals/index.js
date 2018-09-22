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
 * @return {Interval[]}
 */

/* [[1,3],[2,6],[8,10],[15,18]] */

const merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  let tmp = intervals.shift();
  const output = [];
  while (tmp || intervals.length) {
    const current = intervals.shift();
    const isOverlapped = current && current.start <= tmp.end;
    if (isOverlapped) {
      tmp = new Interval(
        Math.min(tmp.start, current.start),
        Math.max(tmp.end, current.end),
      );
    } else {
      output.push(tmp);
      tmp = current;
    }
  }
  return output;
};

export default merge;
