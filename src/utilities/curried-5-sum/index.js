function sum(...args) {
  if (args.length >= 5) {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
  return (...nextArgs) => sum(...args, ...nextArgs);
}

export default sum;
