/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

const toTriple = (str) => {
  const output = str.split(':');
  output[0] = parseInt(output[0]);
  output[2] = parseInt(output[2]);
  return output;
};

var exclusiveTime = function(n, logs) {
  const output = new Array(n).fill(0);
  const stack = [];
  let updatedTime = 0;
  for (let i = 0; i < logs.length; i++) {
    const logTop = stack[stack.length - 1];
    const logI = toTriple(logs[i]);
    if (logI[1] === 'start') {
      if (stack.length) {
        output[logTop[0]] += logI[2] - updatedTime;
      }
      stack.push(logI);
      updatedTime = logI[2];
    } else if (logI[1] === 'end') {
      stack.pop();
      output[logI[0]] += logI[2] + 1 - updatedTime;
      updatedTime = logI[2] + 1;
    }
  }
  return output;
};
