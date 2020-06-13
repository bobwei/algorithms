/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input, start = 0, end = input.length, cache = {}) {
  const key = input.substring(start, end);
  if (key in cache) {
    return cache[key];
  }
  const output = [];
  for (let i = start; i < end; i++) {
    if (isOperator(input[i])) {
      const left = diffWaysToCompute(input, start, i);
      const right = diffWaysToCompute(input, i + 1, end);
      for (const n1 of left) {
        for (const n2 of right) {
          output.push(compute(n1, input[i], n2));
        }
      }
    }
  }
  if (!output.length) {
    output.push(parseInt(input.substring(start, end)));
  }
  cache[key] = output;
  return output;
};

function isOperator(c) {
  return c === '+' || c === '-' || c === '*';
}

function compute(n1, op, n2) {
  if (op === '+') {
    return n1 + n2;
  }
  if (op === '-') {
    return n1 - n2;
  }
  if (op === '*') {
    return n1 * n2;
  }
}
