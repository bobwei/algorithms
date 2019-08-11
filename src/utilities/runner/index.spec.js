import Runner from './index';

test('Runner', (done) => {
  const result = [];
  const runner = new Runner({
    concurrency: 3,
    fn(arg) {
      result.push(arg);
      return new Promise((resolve) => setTimeout(resolve, 100));
    },
  });

  [...new Array(6)].map((_, i) => i).forEach((i) => runner.push(i));
  setTimeout(() => {
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
    done();
  }, 200);
});
