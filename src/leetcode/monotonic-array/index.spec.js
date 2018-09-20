import fn from './index';

test('monotonic-array [6, 5, 4, 4]', () => {
  expect(fn([6, 5, 4, 4])).toEqual(true);
});

test('monotonic-array [1, 2, 2, 3]', () => {
  expect(fn([1, 2, 2, 3])).toEqual(true);
});
