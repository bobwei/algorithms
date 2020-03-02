function promisify(fn) {
  return () => {
    return new Promise((resolve, reject) => {
      fn((err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  };
}

export default promisify;
