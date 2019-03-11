/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const output = {
    sign: numerator * denominator < 0 ? '-' : '',
    integer: Math.floor(Math.abs(numerator / denominator)) + '',
    fractions: [],
  };
  const d = Math.abs(denominator);
  let n = Math.abs(numerator);
  n = n % d;

  const reminders = {};
  while (n && !(n in reminders)) {
    reminders[n] = output.fractions.length;
    n = n < d ? n * 10 : n;
    output.fractions.push(Math.floor(n / d));
    n = n % d;
  }

  if (n in reminders) {
    const p = reminders[n];
    // prettier-ignore
    return output.sign + output.integer +
      '.' +
      output.fractions.slice(0, p).join('') +
      '(' + output.fractions.slice(p).join('') + ')';
  }
  if (output.fractions.length) {
    // prettier-ignore
    return output.sign + output.integer + '.' +
      output.fractions.join('');
  }
  return output.sign + output.integer;
};
