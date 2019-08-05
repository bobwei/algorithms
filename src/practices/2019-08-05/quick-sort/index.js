function quickSort(arr, start = 0, end = arr.length) {
  if (end - start <= 1) {
    return arr;
  }
  const p = partition(arr, start, end);
  quickSort(arr, start, p);
  quickSort(arr, p + 1, end);
  return arr;
}

function partition(arr, start, end) {
  const p = end - 1;
  let j = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[p]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j += 1;
    }
  }
  [arr[j], arr[p]] = [arr[p], arr[j]];
  return j;
}

console.log(quickSort([1, 3, 19, 9, 6, 5, 3, 5]));
