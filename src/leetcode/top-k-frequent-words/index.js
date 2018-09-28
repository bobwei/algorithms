/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

const comparator = (parent, child) => {
  return parent.key < child.key || (parent.key === child.key && parent.value > child.value);
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleUp = (arr, i, isValidHeap = comparator) => {
  if (i <= 0) {
    return;
  }
  const p = Math.floor((i - 1) / 2);
  if (!isValidHeap(arr[p], arr[i])) {
    swap(arr, p, i);
    bubbleUp(arr, p);
  }
};

const bubbleDown = (arr, i, isValidHeap = comparator) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const isValid =
    (left >= arr.length || isValidHeap(arr[i], arr[left])) &&
    (right >= arr.length || isValidHeap(arr[i], arr[right]));
  if (!isValid) {
    const target = right >= arr.length || !isValidHeap(arr[right], arr[left]) ? left : right;
    swap(arr, i, target);
    bubbleDown(arr, target);
  }
};

const extractTop = (arr) => {
  const output = arr[0];
  if (arr.length <= 1) {
    return output;
  }
  arr[0] = arr.pop();
  bubbleDown(arr, 0);
  return output;
};

const topKFrequent = function(words, k) {
  const counts = {};
  for (let i = 0; i < words.length; i++) {
    counts[words[i]] = (counts[words[i]] || 0) + 1;
  }
  const arr = [];
  const keys = Object.keys(counts);
  for (let i = 0; i < keys.length; i++) {
    const word = keys[i];
    const count = counts[word];
    arr.push({
      key: count,
      value: word,
    });
    bubbleUp(arr, arr.length - 1);
    if (arr.length > k) {
      extractTop(arr);
    }
  }
  const output = [];
  for (let i = 0; i < k; i++) {
    const { value } = extractTop(arr);
    output.push(value);
  }
  output.reverse();
  return output;
};

export default topKFrequent;
