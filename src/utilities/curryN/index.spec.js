import curryN from './index';

test('curryN', () => {
  const sum = curryN(5, (...args) => args.reduce((acc, cur) => acc + cur, 0));
  expect(sum(1, 2, 3, 4, 5)).toEqual(15);
  expect(sum(1)(2)(3)(4)(5)).toEqual(15);
  expect(sum(1)(2, 3)(4)(5)).toEqual(15);
});
