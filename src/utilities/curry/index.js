function curry(fn, arr = []) {
  return (...args) => {
    if (arr.length + args.length >= fn.length) {
      return fn(...arr, ...args);
    }
    return curry(fn, [...arr, ...args]);
  };
}

export default curry;
