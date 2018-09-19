/**
 * @param {number} n
 * @return {number}
 */

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const countPrimes = function(n) {
  let nPrimes = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      nPrimes += 1;
    }
  }
  return nPrimes;
};

export default countPrimes;
