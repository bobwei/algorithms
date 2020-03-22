/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let sum = 0;
  for (const num of nums) {
    const divisors = [...getFourDivisors(num)];
    if (divisors.length === 4) {
      sum += divisors.reduce((a, b) => a + b, 0);
    }
  }
  return sum;
};

function getFourDivisors(num) {
  const max = Math.sqrt(num);
  const output = new Set();
  for (let i = 1; i <= max; i++) {
    if (num % i === 0) {
      output.add(i);
      output.add(num / i);
      if (output.size > 4) {
        break;
      }
    }
  }
  return output;
}
