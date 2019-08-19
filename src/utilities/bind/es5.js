/* eslint-disable prefer-rest-params */
function bind(fn, context) {
  const args1 = Array.prototype.slice.call(arguments, 2);
  return function() {
    const args2 = Array.prototype.slice.call(arguments, 0);
    return fn.apply(context, args1.concat(args2));
  };
}

export default bind;
