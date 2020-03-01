import TaskQueue from './es6';

jest.setTimeout(10 * 1000);

test('task queue', async () => {
  const results = [];
  const queue = new TaskQueue({
    fn: (arg) => {
      results.push(arg);
      return createTimeout(arg * 100);
    },
  });
  const data = new Array(10).fill(1);
  data.forEach((arg) => queue.push(arg));
  await createTimeout(600);
  expect(results).toEqual(data);
});

function createTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
