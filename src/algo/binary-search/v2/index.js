export function binarySearch(arr, target, comparator = (a, b) => a - b) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid]) === 0) {
      return mid;
    } else if (comparator(target, arr[mid]) < 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

export function lowerBound(arr, target, comparator = (a, b) => a - b) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid]) <= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

export function upperBound(arr, target, comparator = (a, b) => a - b) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (comparator(target, arr[mid]) < 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
