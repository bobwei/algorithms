/**
 * @param {string} s
 * @return {string[]}
 */

const isValid = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      counter += 1;
    } else if (str[i] === ')') {
      counter -= 1;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 0;
};

var removeInvalidParentheses = function(s) {
  const output = [];
  const visited = {};
  const queue = [s];
  let isFound = false;
  while (queue.length) {
    const str = queue.shift();
    if (visited[str]) {
      continue;
    }
    visited[str] = true;
    if (isValid(str)) {
      isFound = true;
      output.push(str);
      continue;
    }
    if (isFound) {
      continue;
    }
    for (let i = 0; i < str.length; i++) {
      if (!(str[i] === '(' || str[i] === ')')) {
        continue;
      }
      const testStr = str.slice(0, i) + str.slice(i + 1);
      queue.push(testStr);
    }
  }
  return output;
};
