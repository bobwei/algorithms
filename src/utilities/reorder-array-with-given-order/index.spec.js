import sort from './index';

test('sort', () => {
  const arr = [50, 40, 70, 60, 90];
  const order = [3, 0, 4, 1, 2];
  const result = sort(arr, order);
  expect(result).toEqual([40, 60, 90, 50, 70]);
});
