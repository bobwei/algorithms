/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s, start = 0, end = s.length - 1) {
  const nums = [0];
  const ops = [];
  for (let i = start; i <= end; ) {
    if (isOp(s[i])) {
      ops.push(s[i]);
      i += 1;
    } else if (isNum(s[i])) {
      const str = parseNum(s, i);
      const num = parseInt(str);
      pushNum(nums, ops, num);
      computeHighPrecedence(nums, ops);
      i += str.length;
    } else if (s[i] === '(') {
      const right = findParentheses(s, i);
      const num = calculate(s, i + 1, right - 1);
      pushNum(nums, ops, num);
      computeHighPrecedence(nums, ops);
      i = right + 1;
    } else {
      i += 1;
    }
  }
  while (ops.length) {
    compute(nums, ops);
  }
  return nums.pop();
};

function computeHighPrecedence(nums, ops) {
  const lastOp = ops[ops.length - 1];
  if (nums.length >= 2 && (lastOp === '*' || lastOp === '/')) {
    compute(nums, ops);
  }
}

function pushNum(nums, ops, num) {
  if (ops[ops.length - 1] === '-') {
    ops.pop();
    ops.push('+');
    nums.push(-num);
  } else {
    nums.push(num);
  }
}

function compute(nums, ops) {
  const n1 = nums.pop();
  const n2 = nums.pop();
  const op = ops.pop();
  const num = (() => {
    if (op === '+') {
      return n2 + n1;
    } else if (op === '-') {
      return n2 - n1;
    } else if (op === '*') {
      return n2 * n1;
    } else if (op === '/') {
      const sign = n2 * n1 >= 0 ? 1 : -1;
      return sign * Math.floor(Math.abs(n2 / n1));
    }
  })();
  nums.push(num);
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

function parseNum(s, start) {
  let i = start;
  while (isNum(s[i])) {
    i += 1;
  }
  return s.substring(start, i);
}

function isOp(c) {
  return c === '+' || c === '-' || c === '*' || c === '/';
}

function isNum(c) {
  return /[0-9]/.test(c);
}
