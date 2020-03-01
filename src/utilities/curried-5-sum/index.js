function sum(...args) {
  if (args.length >= 5) {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
  return sum.bind(this, ...args);
}

export default sum;
