import BinaryIndexedTree from './index';

test('BinaryIndexedTree', () => {
  // prettier-ignore
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [7, 8, 9],
    [7, 8, 9],
    [7, 8, 9],
    [7, 8, 9],
  ];
  const bit = new BinaryIndexedTree(matrix);
  expect(bit.getSum(2, 2)).toEqual(getSum(matrix, 2, 2));
  expect(bit.getSum(1, 1)).toEqual(getSum(matrix, 1, 1));
  expect(bit.getSum(6, 2)).toEqual(getSum(matrix, 6, 2));
});

function getSum(matrix, row, col) {
  let sum = 0;
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= col; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
