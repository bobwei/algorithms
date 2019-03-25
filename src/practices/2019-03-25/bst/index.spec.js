import BST from './index';

test('BST', () => {
  const bst = new BST();
  const data = [4, 2, 1, 3, 6, 5, 7];
  data.forEach((i) => bst.insert(i));
  expect([...bst]).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('BST', () => {
  const bst = new BST();
  const data = [4, 2, 1, 3, 6, 5, 7];
  data.forEach((i) => bst.insert(i));
  bst.delete(2).delete(4);
  expect([...bst]).toEqual([1, 3, 5, 6, 7]);
});
