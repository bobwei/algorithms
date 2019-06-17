import upperBound from './upper-bound';

test('upperBound', () => {
  expect(upperBound([1, 3, 5, 7, 9], 3)).toEqual(2);
  expect(upperBound([1, 3, 5, 7, 9], 4)).toEqual(2);
  expect(upperBound([], 4)).toEqual(0);
});
