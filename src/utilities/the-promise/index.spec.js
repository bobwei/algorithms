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

test('ThePromise.all', (done) => {
  const promises = [1, 2, 3, 4, 5].map((val) => ThePromise.resolve(val));
  ThePromise.all(promises)
    .then((val) => {
      expect(val).toEqual([1, 2, 3, 4, 5]);
    })
    .then(() => done());
});

test('ThePromise.all', (done) => {
  const promises = [1, 2, 1, 1, 1].map((val) => {
    return new ThePromise((resolve) => {
      setTimeout(() => resolve(val), val * 1000);
    });
  });
  ThePromise.all(promises)
    .then((val) => {
      expect(val).toEqual([1, 2, 1, 1, 1]);
    })
    .then(() => done());
});

test('ThePromise.all with error', (done) => {
  const promises = [1, 2, 1, 1, 1].map((val) => {
    return new ThePromise((resolve, reject) => {
      setTimeout(() => {
        if (val < 2) {
          resolve(val);
          return;
        }
        reject(val);
      }, val * 1000);
    });
  });
  ThePromise.all(promises)
    .catch((error) => {
      expect(error).toEqual(2);
    })
    .then(() => done());
});
