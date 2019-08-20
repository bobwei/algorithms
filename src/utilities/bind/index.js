/* eslint-disable no-extend-native */
Function.prototype.bind = function(context, ...args1) {
  const fn = this;
  return function(...args2) {
    return fn.call(context, ...args1, ...args2);
  };
};
