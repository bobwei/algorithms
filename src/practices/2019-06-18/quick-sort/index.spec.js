import quicksort from './index';

test('quicksort', () => {
  const arr = [1, 3, 4, 2, 2];
  const result = quicksort(arr);
  expect(result).toEqual([1, 2, 2, 3, 4]);
});

test('quicksort', () => {
  expect(quicksort([])).toEqual([]);
});
