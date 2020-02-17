/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
  const visited = new Set();
  let nEvents = 0;
  for (const [s, e] of events) {
    for (let i = s; i <= e; i++) {
      if (!visited.has(i)) {
        visited.add(i);
        nEvents += 1;
        break;
      }
    }
  }
  return nEvents;
};
