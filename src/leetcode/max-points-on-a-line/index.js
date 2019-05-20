/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  if (points.length <= 2) {
    return points.length;
  }
  const m = points.length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    const count = {};
    let nSamePoints = 1;
    for (let j = i + 1; j < m; j++) {
      if (encode(points[i]) === encode(points[j])) {
        nSamePoints += 1;
        continue;
      }
      const slope = getSlope(points[i], points[j]);
      count[slope] = (count[slope] || 0) + 1;
    }
    // prettier-ignore
    const localMax = Object
      .values(count)
      .reduce((acc, cur) => Math.max(acc, cur), 0);
    max = Math.max(max, localMax + nSamePoints);
  }
  return max;
};

function encode(point) {
  return point + '';
}

function getSlope(p1, p2) {
  if (p1[0] === p2[0]) {
    return Infinity;
  }
  // `1000000000000`: hack for overflow issue with large numbers
  return (1000000000000 * (p2[1] - p1[1])) / (p2[0] - p1[0]);
}
