import { binarySearch, lowerBound, upperBound } from './index';

test('binarySearch', () => {
  const arr = [1, 9, 200, 340, 1000, 9999];
  expect(binarySearch(arr, 200)).toEqual(2);
});

test('lowerBound', () => {
  const arr = [1, 9, 200, 340, 1000, 9999];
  expect(lowerBound(arr, 201)).toEqual(3);
  expect(lowerBound(arr, 200)).toEqual(2);
});

test('upperBound', () => {
  const arr = [1, 9, 200, 340, 1000, 9999];
  expect(upperBound(arr, 201)).toEqual(3);
  expect(upperBound(arr, 200)).toEqual(3);
});
