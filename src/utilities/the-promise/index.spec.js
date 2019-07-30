import ThePromise from './index';

test('promise', (done) => {
  const promise = new ThePromise((resolve, reject) => {
    resolve('one');
  });

  const result = [];
  promise
    .then((val) => {
      result.push(val);
      return 'two';
    })
    .then((val) => {
      result.push(val);
      return 'three';
    })
    .then((val) => {
      result.push(val);
    })
    .then(() => {
      expect(result).toEqual(['one', 'two', 'three']);
    })
    .then(() => done());
});

test('promise', (done) => {
  const promise = new ThePromise((resolve, reject) => {
    resolve('one');
  });

  const result = [];
  promise.then((val) => {
    return 'two';
  });
  promise
    .then((val) => {
      result.push(val);
      return 'xyz';
    })
    .then((val) => {
      result.push(val);
    })
    .then(() => {
      expect(result).toEqual(['one', 'xyz']);
    })
    .then(() => done());
});

test('promise', (done) => {
  const promise = new ThePromise((resolve, reject) => {
    reject('error');
  });

  const result = [];
  promise
    .catch((error) => {
      result.push(error);
      return '123';
    })
    .then((val) => {
      result.push(val);
    })
    .then(() => {
      expect(result).toEqual(['error', '123']);
    })
    .then(() => done());
});

test('promise', (done) => {
  const promise = new ThePromise((resolve, reject) => {
    reject('error');
  });

  const result = [];
  promise
    .then((val) => {
      result.push(val);
      return 'two';
    })
    .then((val) => {
      result.push(val);
      return 'three';
    })
    .catch((error) => {
      result.push(error);
      return '123';
    })
    .then((val) => {
      result.push(val);
    })
    .then(() => {
      expect(result).toEqual(['error', '123']);
    })
    .then(() => done());
});
