import v1 from './index';
import v2 from './index.v2';

test('house-robber-ii', () => {
  expect(v1([2, 3, 2])).toEqual(3);
});

test('house-robber-ii', () => {
  expect(v1([1, 2, 3, 1])).toEqual(4);
});

test('house-robber-ii', () => {
  expect(v2([2, 3, 2])).toEqual(3);
});

test('house-robber-ii', () => {
  expect(v2([1, 2, 3, 1])).toEqual(4);
});
