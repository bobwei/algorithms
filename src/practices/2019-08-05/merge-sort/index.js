function mergeSort(arr, start = 0, end = arr.length) {
  if (end - start <= 1) {
    return arr.slice(start, end);
  }
  const mid = Math.floor((start + end) / 2);
  const left = mergeSort(arr, start, mid);
  const right = mergeSort(arr, mid, end);
  const output = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }
  output.push(...left, ...right);
  return output;
}

console.log(mergeSort([1, 9, 6, 8, 3, 10, 22]));
