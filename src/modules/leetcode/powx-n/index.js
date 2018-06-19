/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const fn = (_x, _n) => {
  if (!_n) {
    return 1;
  }
  const x = _n > 0 ? _x : 1 / _x;
  const n = Math.abs(_n);
  const isEven = n % 2 === 0;
  const half = isEven ? fn(x, n / 2) : fn(x, Math.floor(n / 2));
  return isEven ? half * half : half * half * x;
};

export default fn;
