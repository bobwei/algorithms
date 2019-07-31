const fn = (num, nBits = 32) => {
  let output = '';
  for (let i = 0; i < nBits / 4; i++) {
    output = ((num >> (i * 4)) & 15).toString(16) + output;
  }
  return '0x' + trimZero(output);
};

function trimZero(str) {
  let i = 0;
  while (str[i] === '0') {
    i += 1;
  }
  return i < str.length ? str.substring(i) : '0';
}

export default fn;
