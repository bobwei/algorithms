const sort = (arr, start = 0, end = arr.length, comparator = (a, b) => a - b) => {
  if (end - start <= 1) {
    return arr;
  }
  const p = partition(arr, start, end, comparator);
  sort(arr, start, p, comparator);
  sort(arr, p + 1, end, comparator);
  return arr;
};

function partition(arr, start, end, comparator) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < p; i++) {
    if (comparator(arr[i], arr[p]) <= 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[j], arr[p]] = [arr[p], arr[j]];
  return j;
}

export default sort;
