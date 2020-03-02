import promisify from './index';

test('promisify', () => {
  function read(cb) {
    const error = null;
    const data = '123';
    cb(error, data);
  }

  const readWithPromise = promisify(read);
  return readWithPromise()
    .then((data) => {
      expect(data).toEqual('123');
    })
    .catch(console.log);
});
