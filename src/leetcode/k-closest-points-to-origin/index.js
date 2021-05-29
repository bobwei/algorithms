/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let left = 0;
  let right = points.length;
  while (left < right) {
    const p = partition(points, left, right);
    if (k === p + 1) {
      return points.slice(0, k);
    } else if (k > p + 1) {
      left = p + 1;
    } else {
      right = p;
    }
  }
  return points;
};

function partition(points, start, end) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < p; i++) {
    if (getDistance(points[i]) <= getDistance(points[p])) {
      [points[i], points[j]] = [points[j], points[i]];
      j += 1;
    }
  }
  [points[j], points[p]] = [points[p], points[j]];
  return j;
}

function getDistance(p1, p2 = [0, 0]) {
  return Math.sqrt(p1[0] ** 2 + p1[1] ** 2);
}
