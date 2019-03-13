import range from './index';

test('range', () => {
  const result = [...range(0, 5)];
  expect(result).toEqual([0, 1, 2, 3, 4]);
});
