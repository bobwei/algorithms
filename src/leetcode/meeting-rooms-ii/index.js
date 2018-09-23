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
/*
  start => +1 room
  end => -1 room
  max = max number of rooms at t
  [[0,30],[5,10],[15,20]] transform to timeline
  ex:
  [ [ 0, 1 ],
  [ 5, 1 ],
  [ 10, -1 ],
  [ 15, 1 ],
  [ 20, -1 ],
  [ 30, -1 ] ]
*/
const minMeetingRooms = function(intervals) {
  const timeline = [];
  for (let i = 0; i < intervals.length; i++) {
    timeline.push([intervals[i].start, 1]);
    timeline.push([intervals[i].end, -1]);
  }
  timeline.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let n = 0;
  let max = 0;
  for (let i = 0; i < timeline.length; i++) {
    n += timeline[i][1];
    max = Math.max(max, n);
  }
  return max;
};

export default minMeetingRooms;
