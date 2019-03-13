const fn = (start, end) => {
  let i = start;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (!(i < end)) {
        return {
          done: true,
        };
      }
      return {
        value: i++,
        done: false,
      };
    },
  };
};

export default fn;
