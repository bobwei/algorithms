import quicksort from './index';

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
