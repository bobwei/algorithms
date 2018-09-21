import { bubbleUp, bubbleDown, extractTop, buildHeap } from './index';

test('heap.bubbleUp', () => {
  const arr = [2, 5, 6, 8, 9, 7, 8, 1];
  bubbleUp(arr, arr.length - 1);
  expect(arr).toEqual([1, 2, 6, 5, 9, 7, 8, 8]);
  for (let i = 0; i < arr.length; i++) {
    bubbleUp(arr, i);
  }
  expect(arr).toEqual([1, 2, 6, 5, 9, 7, 8, 8]);
});

test('heap.bubbleDown', () => {
  const arr = [8, 2, 6, 5, 9, 7, 8];
  bubbleDown(arr, 0);
  expect(arr).toEqual([2, 5, 6, 8, 9, 7, 8]);
});

test('heap.bubbleDown', () => {
  const arr = [9, 8];
  bubbleDown(arr, 0);
  expect(arr).toEqual([8, 9]);
});

test('heap.extractTop', () => {
  const arr = [2, 5, 6, 8, 9, 7, 8];
  const result = extractTop(arr);
  expect(result).toEqual(2);
  expect(arr).toEqual([5, 8, 6, 8, 9, 7]);
});

test('heap.extractTop', () => {
  const arr = [2, 5, 6, 8, 9, 7, 8];
  const result = [];
  while (arr.length) {
    result.push(extractTop(arr));
  }
  expect(result).toEqual([2, 5, 6, 7, 8, 8, 9]);
});

test('heap.heapify', () => {
  const arr = [9, 8, 1, 3, 2, 6];
  buildHeap(arr);
  expect(arr).toEqual([1, 2, 6, 9, 3, 8]);
});
