/*
  Min heap
*/

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

export const bubbleUp = (arr, i) => {
  const p = Math.floor((i - 1) / 2);
  if (p < 0) {
    return;
  }
  if (arr[p] > arr[i]) {
    swap(arr, p, i);
    bubbleUp(arr, p);
  }
};

export const bubbleDown = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValidHeap =
    (left >= arr.length || arr[i] < arr[left]) &&
    (right >= arr.length || arr[i] < arr[right]);
  if (isValidHeap) {
    return;
  }
  const next = arr[left] < arr[right] || right >= arr.length ? left : right;
  swap(arr, next, i);
  bubbleDown(arr, next);
};

export const extractTop = (arr) => {
  if (arr.length <= 1) {
    return arr.pop();
  }
  const output = arr[0];
  arr[0] = arr.pop();
  bubbleDown(arr, 0);
  return output;
};

export const buildHeap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    bubbleUp(arr, i);
  }
};
