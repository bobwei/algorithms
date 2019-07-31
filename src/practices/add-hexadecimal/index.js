const fn = (num1, num2) => {
  let output = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    // prettier-ignore
    const sum = (i >= 0 ? parseInt(num1[i], 16) : 0)
      + (j >= 0 ? parseInt(num2[j], 16) : 0)
      + carry;
    output = (sum % 16).toString(16) + output;
    carry = Math.floor(sum / 16);
    i -= 1;
    j -= 1;
  }
  return output;
};

export default fn;
