import quickSelect from './index';

test('quickSelect', () => {
  const arr = [3, 5, 9, 10, 100, 50, 6, 5];
  expect(quickSelect(arr, 4)).toEqual([3, 5, 5, 6]);
});
