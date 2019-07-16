import floor from './floor';

test('floor', () => {
  expect(floor([1, 3, 4, 6, 7, 8, 9], 5)).toEqual(2);
  expect(floor([1, 3, 4, 6, 7, 8, 9], 2)).toEqual(0);
  expect(floor([1, 3, 4, 6, 7, 8, 9], 3)).toEqual(1);
});
