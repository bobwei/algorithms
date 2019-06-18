/*
  References:
  - https://www.studytonight.com/data-structures/quick-sort
  - https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/analysis-of-quicksort
*/

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

export const partition = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[end];
  let i = start;
  for (let j = i; j < end; j++) {
    if (arr[j] <= pivot) {
      swap(arr, j, i);
      i += 1;
    }
  }
  swap(arr, i, end);
  return i;
};

const quicksort = (arr, i = 0, j = arr.length - 1) => {
  if (j - i <= 0) {
    return arr;
  }
  const p = partition(arr, i, j);
  quicksort(arr, i, p - 1);
  quicksort(arr, p + 1, j);
  return arr;
};

export default quicksort;
