function mergeSort(arr, start = 0, end = arr.length, comparator = defaultComparator) {
  if (end - start <= 1) {
    return arr.slice(start, end);
  }
  const mid = Math.floor((start + end) / 2);
  const left = mergeSort(arr, start, mid, comparator);
  const right = mergeSort(arr, mid, end, comparator);
  const output = [];
  while (left.length && right.length) {
    if (comparator(left[0], right[0]) <= 0) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }
  output.push(...left, ...right);
  return output;
}

function defaultComparator(a, b) {
  return a - b;
}

export default mergeSort;
