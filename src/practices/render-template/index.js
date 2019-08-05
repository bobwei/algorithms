function render(str, context) {
  const tokens = [];
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      stack.push(i);
    } else if (str[i] === '}') {
      const index = stack.pop();
      const token = str.substring(index + 1, i);
      tokens.push([token, index]);
    }
  }
  let output = '';
  let pre = 0;
  for (const [token, index] of tokens) {
    output += str.substring(pre, index);
    output += context[token];
    pre = index + token.length + 2;
  }
  output += str.substring(pre);
  return output;
}

export default render;
