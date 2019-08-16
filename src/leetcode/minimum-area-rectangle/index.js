/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  const map = createMap(points);
  let min = Infinity;
  for (const [x1, y1] of points) {
    for (const [x2, y2] of points) {
      if (x1 === x2 && y1 === y2) {
        continue;
      }
      if (map['x' + x2].has(y1) && map['y' + y2].has(x1)) {
        const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
        if (area) {
          min = Math.min(min, area);
        }
      }
    }
  }
  return min < Infinity ? min : 0;
};

function createMap(points) {
  const map = {};
  for (const [x, y] of points) {
    const xKey = 'x' + x;
    const yKey = 'y' + y;
    if (!(xKey in map)) map[xKey] = new Set();
    if (!(yKey in map)) map[yKey] = new Set();
    map[xKey].add(y);
    map[yKey].add(x);
  }
  return map;
}
