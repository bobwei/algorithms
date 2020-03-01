function curryN(n, fn) {
  return function(...args) {
    if (args.length >= n) {
      return fn(...args);
    }
    return curryN(n - args.length, fn.bind(this, ...args));
  };
}

export default curryN;
