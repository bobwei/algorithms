/**
 * @param {string} s
 * @return {string[]}
 */

const isValid = (str) => {
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      n += 1;
    } else if (str[i] === ')') {
      n -= 1;
    }
    if (n < 0) {
      return false;
    }
  }
  return n === 0;
};

var removeInvalidParentheses = function(s) {
  const output = [];
  const queue = [s];
  const cache = new Set();
  while (queue.length) {
    const str = queue.shift();
    if (cache.has(str)) {
      continue;
    }
    cache.add(str);
    if (isValid(str)) {
      output.push(str);
    }
    if (!output.length) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== '(' && str[i] !== ')') {
          continue;
        }
        const tmpStr = str.slice(0, i) + str.slice(i + 1);
        queue.push(tmpStr);
      }
    }
  }
  return output;
};
