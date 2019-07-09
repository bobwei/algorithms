import createRateLimiter from './index';

jest.useFakeTimers();

test('test', () => {
  let nSuccess = 0;
  let nError = 0;
  // prettier-ignore
  const inc = createRateLimiter(5, () => { nSuccess += 1 }, () => { nError += 1 });
  for (let i = 0; i < 10; i++) {
    inc();
  }
  expect(nSuccess).toEqual(5);
  expect(nError).toEqual(5);
});
