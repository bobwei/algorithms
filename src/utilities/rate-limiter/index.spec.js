import createRateLimiter from './index';

jest.useFakeTimers();

test('test', () => {
  let nSuccess = 0;
  let nError = 0;
  const isAllowed = createRateLimiter(5);
  for (let i = 0; i < 10; i++) {
    if (isAllowed()) {
      nSuccess += 1;
    } else {
      nError += 1;
    }
  }
  expect(nSuccess).toEqual(5);
  expect(nError).toEqual(5);
});
