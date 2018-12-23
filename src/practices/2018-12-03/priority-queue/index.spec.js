import PriorityQueue from './index';

test('PriorityQueue', () => {
  const pq = new PriorityQueue({ comparator: (a, b) => a.id < b.id });
  pq.enqueue({ id: 2 });
  pq.enqueue({ id: 1 });
  pq.enqueue({ id: 3 });
  pq.enqueue({ id: 6 });
  pq.enqueue({ id: 4 });
  pq.enqueue({ id: 5 });
  expect(pq.dequeue()).toEqual({ id: 1 });
  expect(pq.dequeue()).toEqual({ id: 2 });
  expect(pq.dequeue()).toEqual({ id: 3 });
  expect(pq.dequeue()).toEqual({ id: 4 });
  expect(pq.dequeue()).toEqual({ id: 5 });
  expect(pq.dequeue()).toEqual({ id: 6 });
});

test('PriorityQueue', () => {
  const pq = new PriorityQueue({
    comparator: (a, b) => (a.id !== b.id ? a.id < b.id : a.label < b.label),
  });
  pq.enqueue({ id: 2 });
  pq.enqueue({ id: 1 });
  pq.enqueue({ id: 3 });
  pq.enqueue({ id: 6 });
  pq.enqueue({ id: 4 });
  pq.enqueue({ id: 5, label: 1 });
  pq.enqueue({ id: 5, label: 2 });
  pq.enqueue({ id: 5, label: 3 });
  pq.enqueue({ id: 5, label: 4 });
  pq.enqueue({ id: 5, label: 5 });
  const result = [];
  const length = pq.arr.length;
  for (let i = 0; i < length; i++) {
    result.push(pq.dequeue());
  }
  const expectedResult = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5, label: 1 },
    { id: 5, label: 2 },
    { id: 5, label: 3 },
    { id: 5, label: 4 },
    { id: 5, label: 5 },
    { id: 6 },
  ];
  expect(result).toEqual(expectedResult);
});

test('PriorityQueue', () => {
  const pq = new PriorityQueue({
    comparator: (a, b) => a.id < b.id,
    isEqual: (a, b) => a.id === b.id,
  });
  pq.enqueue({ id: 2 });
  pq.enqueue({ id: 1 });
  pq.enqueue({ id: 3 });
  pq.enqueue({ id: 6 });
  pq.enqueue({ id: 4 });
  pq.remove({ id: 1 });
  pq.remove({ id: 6 });
  pq.remove({ id: 3 });
  const result = [];
  const length = pq.arr.length;
  for (let i = 0; i < length; i++) {
    result.push(pq.dequeue());
  }
  const expectedResult = [{ id: 2 }, { id: 4 }];
  expect(result).toEqual(expectedResult);
});
