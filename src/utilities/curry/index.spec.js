import curry from './index';

test('curry', () => {
  const add = curry((a, b, c) => {
    return a + b + c;
  });
  expect(add(1, 2, 3)).toEqual(6);
  expect(add(1)(2)(3)).toEqual(6);
  expect(add(1, 2)(3)).toEqual(6);
});
