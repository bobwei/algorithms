import countNumberOfSquaresInTheMatrix from './index';

test('countNumberOfSquaresInTheMatrix', () => {
  const matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 1]];
  expect(countNumberOfSquaresInTheMatrix(matrix)).toEqual(11);
});
