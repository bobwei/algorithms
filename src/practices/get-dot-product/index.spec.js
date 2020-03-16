import getDotProduct from './index';

test('getDotProduct', () => {
  // prettier-ignore
  const result = getDotProduct([[2, 4], [3, 1]], [[3, 5]]);
  expect(result).toEqual(33);
});
