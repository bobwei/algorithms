/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  return quickSelect(points, K, (a, b) => distance(a) < distance(b));
};

function distance([x, y]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

function quickSelect(arr, k, compare) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const p = partition(arr, compare, left, right);
    if (k === p + 1) {
      return arr.slice(0, k);
    } else if (k > p) {
      left = p + 1;
    } else {
      right = p - 1;
    }
  }
  return [];
}

function partition(arr, compare, start, end) {
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
