import debounce from './index';

test('debounce', async () => {
  let counter = 0;
  const inc = debounce(800, () => {
    counter += 1;
  });
  for (let i = 0; i < 10; i++) {
    inc();
  }
  expect(counter).toEqual(0);
  await createTimeout(800);
  inc();
  inc();
  expect(counter).toEqual(1);
  await createTimeout(800);
  expect(counter).toEqual(2);
});

function createTimeout(mSec) {
  return new Promise((resolve) => {
    setTimeout(resolve, mSec);
  });
}
