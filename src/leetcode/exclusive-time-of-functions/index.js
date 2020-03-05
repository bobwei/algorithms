/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const times = new Array(n).fill(0);
  const parsedLogs = logs.map(mapper);
  const stack = [];
  for (let i = 0; i < logs.length; i++) {
    if (stack.length) {
      const deltaT = parsedLogs[i][2] - parsedLogs[i - 1][2];
      const id = stack[stack.length - 1][0];
      times[id] += deltaT;
    }
    if (parsedLogs[i][1] === 'start') {
      stack.push(parsedLogs[i]);
    } else if (parsedLogs[i][1] === 'end') {
      stack.pop();
    }
  }
  return times;
};

function mapper(log) {
  const [id, type, t] = log.split(':');
  return type === 'start' ? [id, type, parseInt(t)] : [id, type, parseInt(t) + 1];
}
