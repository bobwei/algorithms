/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const timeline = [];
  for (const [start, end] of intervals) {
    timeline.push([start, 1], [end, -1]);
  }
  timeline.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let max = 0;
  let count = 0;
  for (const [, delta] of timeline) {
    count += delta;
    max = Math.max(max, count);
  }
  return max;
};
