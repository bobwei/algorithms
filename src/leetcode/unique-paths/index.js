/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const memorize = (fn) => {
  const cache = new Map();
  return (n) => {
    if (cache.has(n)) {
      return cache.get(n);
    }
    const result = fn(n);
    cache.set(n, result);
    return result;
  };
};

const factorial = memorize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

var uniquePaths = function(m, n) {
  if (!m || !n) return 0;
  return factorial(m - 1 + n - 1) / factorial(m - 1) / factorial(n - 1);
};
