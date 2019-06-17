import lowerBound from './lower-bound';

test('lowerBound', () => {
  expect(lowerBound([1, 3, 5, 7, 9], 3)).toEqual(1);
  expect(lowerBound([1, 3, 5, 7, 9], 4)).toEqual(2);
  expect(lowerBound([], 4)).toEqual(0);
});
