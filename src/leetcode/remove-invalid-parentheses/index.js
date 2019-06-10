/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let queue = [s];
  const output = [];
  const visited = new Set();
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const str = queue.shift();
      if (isValid(str)) {
        output.push(str);
      }
      if (output.length) {
        continue;
      }
      for (let i = 0; i < str.length; i++) {
        if (!(str[i] === '(' || str[i] === ')')) {
          continue;
        }
        const candidate = str.substring(0, i) + str.substring(i + 1);
        if (!visited.has(candidate)) {
          visited.add(candidate);
          next.push(candidate);
        }
      }
    }
    if (!output.length) {
      queue = next;
    }
  }
  return output;
};

function isValid(str) {
  let n = 0;
  for (const c of str) {
    if (c === '(') {
      n += 1;
    } else if (c === ')') {
      n -= 1;
    }
    if (n < 0) {
      return false;
    }
  }
  return n === 0;
}
