/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if (!intervals.length) {
    return 0;
  }
  intervals.sort((a, b) => a.start - b.start);
  const timeline = [];
  for (let i = 0; i < intervals.length; i++) {
    timeline.push([intervals[i].start, 1, i]);
    timeline.push([intervals[i].end, -1, i]);
  }
  timeline.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[2] - b[2];
  });
  let max = 0;
  let n = 0;
  for (let i = 0; i < timeline.length; i++) {
    n += timeline[i][1];
    max = Math.max(max, n);
  }
  return max;
};
