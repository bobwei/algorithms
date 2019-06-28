/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const timeline = [];
  for (const [start, end] of intervals) {
    timeline.push([start, 1], [end, -1]);
  }
  timeline.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let max = 0;
  let nRooms = 0;
  for (const [, delta] of timeline) {
    nRooms += delta;
    max = Math.max(max, nRooms);
  }
  return max;
};
