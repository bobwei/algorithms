import PriorityQueue from './index';

test('PriorityQueue', () => {
  const pq = new PriorityQueue({
    comparator: (a, b) => a <= b,
    isEqual: (a, b) => a === b,
  });
  const data = [16, 49, 62, 58, 14, 72458777923, 3, 4, 1, 2];
  data.forEach((el) => pq.enqueue(el));
  const result = [];
  while (pq.length) {
    result.push(pq.dequeue());
  }
  const expectedResult = [1, 2, 3, 4, 14, 16, 49, 58, 62, 72458777923];
  expect(result).toEqual(expectedResult);
});
