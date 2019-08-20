import sum from './index';

test('sum', () => {
  expect(sum(1, 2)(3, 4)(5)).toEqual(15);
  expect(sum(1, 2)(3, 4, 5)).toEqual(15);
  expect(sum(1, 2, 3, 4, 5)).toEqual(15);
});
