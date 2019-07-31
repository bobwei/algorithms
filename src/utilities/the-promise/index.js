class ThePromise {
  constructor(executor) {
    this.state = ThePromise.states.pending;
    this.value = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    this.state = ThePromise.states.fulfilled;
    this.value = value;
    this.notify();
  }

  reject(reason) {
    this.state = ThePromise.states.rejected;
    this.value = reason;
    this.notify();
  }

  notify() {
    if (this.state === ThePromise.states.fulfilled) {
      if (this.onFulfilledFns.length) {
        const onFulfilled = this.onFulfilledFns.shift();
        onFulfilled(this.value);
        this.notify();
      }
    } else if (this.state === ThePromise.states.rejected) {
      if (this.onRejectedFns.length) {
        const onRejected = this.onRejectedFns.shift();
        onRejected(this.value);
        this.notify();
      }
    }
  }

  then(fn) {
    return new ThePromise((resolve, reject) => {
      this.onFulfilledFns.push((value) => {
        resolve(fn(value));
      });
      this.onRejectedFns.push((reason) => {
        reject(reason);
      });
      this.notify();
    });
  }

  catch(fn) {
    return new ThePromise((resolve, reject) => {
      this.onRejectedFns.push((reason) => {
        resolve(fn(reason));
      });
      this.notify();
    });
  }
}

ThePromise.resolve = (value) => {
  return new ThePromise((resolve) => resolve(value));
};

ThePromise.reject = (reason) => {
  return new ThePromise((resolve, reject) => reject(reason));
};

ThePromise.all = (promises) => {
  const results = new Array(promises.length).fill(null);
  let nResolved = 0;
  return new ThePromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          results[i] = result;
          nResolved += 1;
          if (nResolved === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

ThePromise.states = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export default ThePromise;
