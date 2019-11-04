function numberOfWaysStayingAtZero(n) {
  const memo = {};
  const start = n % 2 === 0 ? 0 : 1;
  let sum = 0;
  for (let i = start; i <= n; i += 2) {
    const nPairs = (n - i) / 2;
    sum += f(n, memo) / (f(nPairs, memo) ** 2 * f(i));
  }
  return sum;
}

function f(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    memo[n] = 1;
    return memo[n];
  }
  memo[n] = n * f(n - 1);
  return memo[n];
}

export default numberOfWaysStayingAtZero;
