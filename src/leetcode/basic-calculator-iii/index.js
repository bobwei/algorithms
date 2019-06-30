/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s, start = 0, end = s.length - 1) {
  const nums = [0];
  let op = '+';
  for (let i = start; i <= end; i++) {
    if (isNum(s[i])) {
      const str = parseNum(s, i);
      const num = parseInt(str);
      addNum(nums, op, num);
      i += str.length - 1;
    } else if (s[i] === '(') {
      const right = findParentheses(s, i);
      const num = calculate(s, i + 1, right - 1);
      addNum(nums, op, num);
      i = right;
    } else if (isOp(s[i])) {
      op = s[i];
    }
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
};

function isNum(c) {
  return /[0-9]/.test(c);
}

function parseNum(s, start) {
  let i = start;
  while (isNum(s[i])) {
    i += 1;
  }
  return s.substring(start, i);
}

function findParentheses(s, start) {
  let n = 0;
  for (let i = start; i < s.length; i++) {
    if (s[i] === '(') {
      n += 1;
    } else if (s[i] === ')') {
      n -= 1;
    }
    if (n === 0) {
      return i;
    }
  }
  return -1;
}

function isOp(c) {
  return c === '+' || c === '-' || c === '*' || c === '/';
}

function addNum(nums, op, num) {
  if (op === '+') {
    nums.push(num);
  } else if (op === '-') {
    nums.push(-num);
  } else if (op === '*') {
    nums.push(nums.pop() * num);
  } else if (op === '/') {
    const n = nums.pop();
    const sign = n * num >= 0 ? 1 : -1;
    nums.push(sign * Math.floor(Math.abs(n / num)));
  }
}
