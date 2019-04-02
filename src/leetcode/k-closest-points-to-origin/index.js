/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, k, i = 0, j = points.length - 1) {
  let left = 0;
  let right = points.length - 1;
  while (left <= right) {
    const p = partition(points, left, right);
    if (k === p + 1) {
      return points.slice(0, k);
    } else if (k <= p) {
      right = p - 1;
    } else {
      left = p + 1;
    }
  }
  return [];
};

function partition(arr, start, end, compare = (a, b) => distance(a) < distance(b)) {
  const p = end;
  let j = start;
  for (let i = start; i < end; i++) {
    if (compare(arr[i], arr[p])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[p], arr[j]] = [arr[j], arr[p]];
  return j;
}

function distance([x, y]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
