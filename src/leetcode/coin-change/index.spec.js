import fn from './index';

test('coin-change', () => {
  expect(fn([1, 2, 5], 11)).toEqual(3);
});

test('coin-change', () => {
  expect(fn([2, 5], 11)).toEqual(4);
});
