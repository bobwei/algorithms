function quickSelect(arr, k, start = 0, end = arr.length) {
  const p = partition(arr, start, end, defaultComparator);
  if (p === k - 1) {
    return arr.slice(0, k);
  }
  if (p > k - 1) {
    return quickSelect(arr, k, start, p);
  }
  return quickSelect(arr, k, p + 1, end);
}

function partition(arr, start, end, comparator) {
  const origin = [0, 0];
  const p = end - 1;
  let j = start;
  for (let i = start; i < end; i++) {
    if (comparator(arr[i], arr[p]) < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[j], arr[p]] = [arr[p], arr[j]];
  return j;
}

function defaultComparator(a, b) {
  return a - b;
}

export default quickSelect;
