/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const visited = new Set();
  const output = [];
  let queue = [s];
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const str = queue.shift();
      if (isValid(str)) {
        output.push(str);
      } else {
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
    }
    if (!output.length) {
      queue = next;
    }
  }
  return output;
};

function isValid(s) {
  let n = 0;
  for (const c of s) {
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
