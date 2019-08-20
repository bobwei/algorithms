function bind(fn, context, ...args1) {
  return function(...args2) {
    return fn.call(context, ...args1, ...args2);
  };
}

export default bind;
