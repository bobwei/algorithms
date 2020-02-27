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

test('PriorityQueue', () => {
  const pq = new PriorityQueue({
    comparator: (a, b) => dist(a, [0, 0]) <= dist(b, [0, 0]),
    isEqual: (a, b) => a[0] === b[0] && a[1] === b[1],
  });
  pq.enqueue([1, 1]);
  pq.enqueue([10, 10]);
  pq.enqueue([1, 5]);
  const result = [];
  while (pq.length) {
    result.push(pq.dequeue());
  }
  // prettier-ignore
  expect(result).toEqual([ [ 1, 1 ], [ 1, 5 ], [ 10, 10 ] ]);
});

test('PriorityQueue', () => {
  const pq = new PriorityQueue({
    comparator: (a, b) => dist(a, [0, 0]) <= dist(b, [0, 0]),
    isEqual: (a, b) => a[0] === b[0] && a[1] === b[1],
  });
  pq.enqueue([1, 1]);
  pq.enqueue([10, 10]);
  pq.enqueue([1, 5]);
  pq.delete([10, 9]);
  pq.delete([10, 10]);
  const result = [];
  while (pq.length) {
    result.push(pq.dequeue());
  }
  // prettier-ignore
  expect(result).toEqual([ [ 1, 1 ], [ 1, 5 ] ]);
});

function dist([x1, y1], [x2, y2]) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
