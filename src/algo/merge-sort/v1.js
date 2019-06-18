const merge = (arr, start, end, arr1, arr2) => {
  for (let i = start; i <= end; i++) {
    if (!arr1.length || !arr2.length) {
      arr[i] = arr1.shift() || arr2.shift();
    } else if (arr1[0] <= arr2[0]) {
      arr[i] = arr1.shift();
    } else if (arr2[0] <= arr1[0]) {
      arr[i] = arr2.shift();
    }
  }
};

const mergeSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) {
    return arr;
  }
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, end, arr.slice(start, mid + 1), arr.slice(mid + 1, end + 1));
  return arr;
};

export default mergeSort;
