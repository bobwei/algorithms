/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const letters = logs
    .filter((log) => !isDigit(split(log)[1]))
    .sort((a, b) => {
      const [id1, log1] = split(a);
      const [id2, log2] = split(b);
      if (log1 !== log2) {
        return log1 < log2 ? -1 : 1;
      }
      return id1 < id2 ? -1 : 1;
    });
  const digits = logs.filter((log) => isDigit(split(log)[1]));
  return [...letters, ...digits];
};

function split(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      return [str.substring(0, i), str.substring(i + 1)];
    }
  }
}

function isDigit(str) {
  return /[0-9]+/.test(str[0]);
}
