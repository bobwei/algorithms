import createQueue from './index';

jest.setTimeout(10 * 1000);

test('task queue', async () => {
  const results = [];
  const queue = createQueue((arg) => {
    results.push(arg);
    return createTimeout(arg * 1000);
  });
  const data = new Array(10).fill(1);
  await queue.push(...data);
  expect(results).toEqual(data);
});

test('task queue', async () => {
  const results = [];
  const queue = createQueue((arg) => {
    results.push(arg);
    return createTimeout(arg * 1000);
  });
  const data = [];
  await queue.push(...data);
  expect(results).toEqual(data);
});

test('test queue', async () => {
  const results = [];
  const queue = createQueue((arg) => {
    results.push(arg);
  });
  const data = [1, 2, 3, 4, 5];
  await queue.push(...data);
  expect(results).toEqual(data);
});

function createTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
