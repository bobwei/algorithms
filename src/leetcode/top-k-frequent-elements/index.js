/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  Min heap
*/

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleUp = (arr, i) => {
  if (i <= 0) {
    return;
  }
  const p = Math.floor((i - 1) / 2);
  const isValidHeap = arr[i].key >= arr[p].key;
  if (isValidHeap) {
    return;
  }
  swap(arr, p, i);
  bubbleUp(arr, p);
};

const bubbleDown = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValidHeap =
    (left >= arr.length || arr[i].key <= arr[left].key) &&
    (right >= arr.length || arr[i].key <= arr[right].key);
  if (isValidHeap) {
    return;
  }
  const next =
    right >= arr.length || arr[left].key < arr[right].key ? left : right;
  swap(arr, i, next);
  bubbleDown(arr, next);
};

const extractTop = (arr) => {
  if (arr.length <= 1) {
    return arr.pop();
  }
  arr[0] = arr.pop();
  bubbleDown(arr, 0);
};

const topKFrequent = function(nums, k) {
  const counts = new Map();
  for (let i = 0; i < nums.length; i++) {
    counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
  }
  const topK = new Array(k).fill({ key: -Infinity, value: null });
  for (const [element, count] of counts.entries()) {
    const key = count;
    const value = element;
    if (key > topK[0].key) {
      topK.push({ key, value });
      bubbleUp(topK, topK.length - 1);
    }
    if (topK.length > k) {
      extractTop(topK);
    }
  }
  return topK.map(({ value }) => value).reverse();
};

export default topKFrequent;
