import BinaryIndexedTree from './index';

test('BinaryIndexedTree', () => {
  const arr = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9];
  const bit = new BinaryIndexedTree(arr);
  expect(bit.getSum(6)).toEqual(arr.slice(0, 6 + 1).reduce((acc, cur) => acc + cur, 0));
  expect(bit.getSum(3)).toEqual(arr.slice(0, 3 + 1).reduce((acc, cur) => acc + cur, 0));
  expect(bit.getSum(9)).toEqual(arr.slice(0, 9 + 1).reduce((acc, cur) => acc + cur, 0));
});
