/**
 * @param {number[]} A
 * @return {boolean}
 */
/*
sum / n = sumA / k
sumA = sum * k / n, k from 1 to n / 2
Since A is an integer array, its sum must be integer.
So select k that (sum * k % n ==== 0) holds
If k is fixed, then we know sumA.
If there exists a combination with length is k and sum is sumA,
then it can be split with the same avg.
*/
/*
dp[i][j] => combination sums of array with lenght i, j selected
dp[i][j] = [...dp[i - 1][j], ...dp[i - 1][j - 1].map(val => val + arr[i - 1])]
*/
/*
next[j] = [...dp[j], ...[...dp[j - 1]].map(val => val + arr[i - 1])]
*/
var splitArraySameAverage = function(A) {
  const n = A.length;
  const sum = A.reduce((acc, cur) => acc + cur, 0);
  for (let k = 1; k <= n / 2; k++) {
    if ((sum * k) % n === 0 && helper(A, n, k, (sum * k) / n)) {
      return true;
    }
  }
  return false;
};

function helper(arr, n, k, sum) {
  const dp = createCombinationSum(arr, n, k);
  return dp[n][k].has(sum);
}

function createCombinationSum(arr, n, k) {
  const dp = [...new Array(n + 1)].map(() => [...new Array(k + 1)].map(() => new Set()));
  for (let i = 0; i <= n; i++) {
    dp[i][0].add(0);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      concat(dp[i][j], dp[i - 1][j], [...dp[i - 1][j - 1]].map((val) => val + arr[i - 1]));
    }
  }
  return dp;
}

function concat(target, ...args) {
  for (const set of args) {
    for (const el of set) {
      target.add(el);
    }
  }
}
