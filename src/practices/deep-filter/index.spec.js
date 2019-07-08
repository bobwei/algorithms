import deepFilter from './index';

test('deep filter', () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    },
  };
  const filter = (n) => n >= 0;
  const result = deepFilter(obj, filter);
  expect(result).toEqual({ a: 1, b: { c: 2, h: { i: 5, j: 6 } } });
});
