import createBST, { insert, inOrder } from './index';

test('bst', () => {
  const data = [3, 2, 1, 3, 4, 5, 6];
  const bst = createBST();
  const result = data.reduce((acc, i) => bst.insert(i), bst).inOrder();
  expect(result).toEqual([1, 2, 3, 3, 4, 5, 6]);
  const result2 = bst
    .remove(1)
    .remove(2)
    .remove(3)
    .remove(3)
    .inOrder();
  expect(result2).toEqual([4, 5, 6]);
});
