export default function createQueue(fn, concurrency = 2) {
  const queue = [];
  let nRunning = 0;
  const execute = () => {
    if (nRunning + 1 <= concurrency && queue.length) {
      nRunning += 1;
      // prettier-ignore
      return Promise
        .resolve(fn(queue.shift()))
        .then(() => {
          nRunning -= 1;
          return execute();
        });
    }
    return Promise.resolve();
  };
  return {
    push(...args) {
      return Promise.all(
        args.map((arg) => {
          queue.push(arg);
          return execute();
        }),
      );
    },
  };
}
