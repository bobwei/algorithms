/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let op;
  for (const token of split(s)) {
    if (isOp(token)) {
      op = token;
    } else {
      const num = token;
      if (op === '+') {
        stack.push(num);
      } else if (op === '-') {
        stack.push(-num);
      } else if (op === '*') {
        stack.push(stack.pop() * num);
      } else if (op === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      } else {
        stack.push(num);
      }
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};

function split(s) {
  const output = [];
  for (let i = 0; i < s.length; ) {
    if (s[i] === ' ') {
      i++;
      continue;
    } else if (isOp(s[i])) {
      output.push(s[i]);
      i++;
    } else {
      let j = i;
      while (/[0-9]/.test(s[j])) {
        j += 1;
      }
      output.push(parseInt(s.substring(i, j)));
      i = j;
    }
  }
  return output;
}

function isOp(c) {
  return c === '+' || c === '-' || c === '*' || c === '/';
}
