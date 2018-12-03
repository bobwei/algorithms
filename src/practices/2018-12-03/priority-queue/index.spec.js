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
