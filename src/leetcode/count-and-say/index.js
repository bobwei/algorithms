/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
  let output = ['1'];
  for (let i = 1; i < n; i++) {
    const nextOutput = [];
    let c = output[0];
    let length = 0;
    for (let j = 0; j < output.length; j++) {
      if (output[j] !== c) {
        nextOutput.push(String(length), c);
        c = output[j];
        length = 1;
      } else {
        length += 1;
      }
    }
    nextOutput.push(String(length), c);
    output = nextOutput;
  }
  return output.join('');
};
