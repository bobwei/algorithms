import fn from './index';

test('overlapped-intervals', () => {
  const result = fn([[0, 3], [4, 6], [9, 12]], [[1, 3], [5, 10], [11, 14]]);
  const expectedResult = [[1, 3], [5, 6], [9, 10], [11, 12]];
  expect(result).toEqual(expectedResult);
});

test('overlapped-intervals', () => {
  const result = fn([[2, 8]], [[2, 4], [5, 6], [7, 9]]);
  const expectedResult = [[2, 4], [5, 6], [7, 8]];
  expect(result).toEqual(expectedResult);
});

test('overlapped-intervals', () => {
  const result = fn([], []);
  const expectedResult = [];
  expect(result).toEqual(expectedResult);
});
