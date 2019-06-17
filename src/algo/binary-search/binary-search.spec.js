import binarySearch from './binary-search';

test('binarySearch', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  expect(binarySearch([1, 2, 3, 4, 5], 13)).toEqual(-1);
  expect(binarySearch([], 3)).toEqual(-1);
});
