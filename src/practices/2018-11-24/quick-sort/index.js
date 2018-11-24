const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const partition = (arr, start, end) => {
  const p = end;
  let j = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= arr[p]) {
      swap(arr, i, j);
      j += 1;
    }
  }
  swap(arr, j, p);
  return j;
};

const quicksort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return arr;
  }
  const p = partition(arr, start, end);
  quicksort(arr, start, p - 1);
  quicksort(arr, p + 1, end);
  return arr;
};

export default quicksort;
