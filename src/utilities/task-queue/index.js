export default function createQueue(fn, concurrency = 2) {
  const queue = [];
  let nRunning = 0;

  const run = async () => {
    if (nRunning + 1 <= concurrency && queue.length) {
      nRunning += 1;
      await fn(queue.shift());
      nRunning -= 1;
      await run();
    }
  };

  return {
    push(...args) {
      const promises = args.map((arg) => {
        queue.push(arg);
        return run();
      });
      return Promise.all(promises);
    },
  };
}
