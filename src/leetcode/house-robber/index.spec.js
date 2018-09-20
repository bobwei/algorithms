import fn from './index';

test('house-robber fn([2, 7, 9, 3, 1, 9, 8, 8, 9])', () => {
  expect(fn([2, 7, 9, 3, 1, 9, 8, 8, 9])).toEqual(29);
});

test('house-robber fn([0])', () => {
  expect(fn([0])).toEqual(0);
});

test('house-robber fn([1])', () => {
  expect(fn([1])).toEqual(1);
});

test('house-robber fn([0,1])', () => {
  expect(fn([0, 1])).toEqual(1);
});
