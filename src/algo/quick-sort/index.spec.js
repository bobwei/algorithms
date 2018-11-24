import quicksort, { partition } from './index';

test('quicksort.partition', () => {
  const arr = [1, 3, 4, 2];
  const result = partition(arr);
  expect(arr).toEqual([1, 2, 4, 3]);
  expect(result).toEqual(1);
});

test('quicksort', () => {
  const arr = [1, 3, 4, 2];
  const result = quicksort(arr);
  expect(result).toEqual([1, 2, 3, 4]);
});

test('quicksort', () => {
  const arr = [1, 3, 4, 2, 5, 9, 7, 5, 8];
  const result = quicksort(arr);
  expect(result).toEqual([1, 2, 3, 4, 5, 5, 7, 8, 9]);
});
