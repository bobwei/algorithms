/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let left = 0;
  let right = points.length;
  while (left < right) {
    const p = partition(points, left, right);
    if (K === p + 1) {
      return points.slice(0, K);
    } else if (K > p) {
      left = p + 1;
    } else {
      right = p;
    }
  }
  return [];
};

function partition(arr, start, end, compare = (a, b) => dist(a) < dist(b)) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (compare(arr[i], arr[p])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[j], arr[p]] = [arr[p], arr[j]];
  return j;
}

function dist([x, y]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
