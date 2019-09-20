/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(exp, start = 0, end = exp.length, braces = findBraces(exp)) {
  const stack = [['']];
  for (let i = start; i < end; i++) {
    if (exp[i] === '{') {
      const arr = braceExpansionII(exp, i + 1, braces[i], braces);
      stack.push(product(stack.pop(), arr));
      i = braces[i];
    } else if (exp[i] === '}') {
      continue;
    } else if (exp[i] === ',') {
      stack.push(['']);
    } else {
      stack.push(product(stack.pop(), [exp[i]]));
    }
  }
  return union(stack).sort();
};

function union(stack) {
  const output = new Set();
  for (const arr of stack) {
    for (const val of arr) {
      output.add(val);
    }
  }
  return [...output];
}

function product(arr1, arr2) {
  const arr = [];
  for (const val1 of arr1) {
    for (const val2 of arr2) {
      arr.push(val1 + val2);
    }
  }
  return arr;
}

function findBraces(expression) {
  const braces = {};
  const stack = [];
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '{') {
      stack.push(i);
    } else if (expression[i] === '}') {
      braces[stack.pop()] = i;
    }
  }
  return braces;
}
