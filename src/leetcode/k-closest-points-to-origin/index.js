/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let left = 0;
  let right = points.length - 1;
  while (left <= right) {
    const p = partition(points, left, right);
    if (K === p + 1) {
      return points.slice(0, K);
    } else if (K < p + 1) {
      right = p - 1;
    } else {
      left = p + 1;
    }
  }
  return [];
};

function partition(arr, start, end, compare = (a, b) => getDist(a) <= getDist(b)) {
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

function getDist([x, y]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
