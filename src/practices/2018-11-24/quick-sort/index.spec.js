import sort from './index';

test('sort', () => {
  const data = [1, 3, 6, 6, 2, 5, 8, 0, 5];
  const result = sort(data);
  const expectedResult = [0, 1, 2, 3, 5, 5, 6, 6, 8];
  expect(result).toEqual(expectedResult);
});

test('sort', () => {
  expect(sort([0])).toEqual([0]);
  expect(sort([1, 6, 3])).toEqual([1, 3, 6]);
  expect(sort([1, 6, 3, 4])).toEqual([1, 3, 4, 6]);
  expect(sort([1, 6, 0, 3])).toEqual([0, 1, 3, 6]);
});
