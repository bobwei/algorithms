import PriorityQueue from '../index';

test('PriorityQueue', () => {
  const queue = new PriorityQueue();
  queue
    .enqueue(2, 2)
    .enqueue(1, 1)
    .enqueue(3, 3)
    .enqueue(4, 4)
    .enqueue(0, 0);
  expect([...queue]).toEqual([0, 1, 2, 3, 4]);
});
