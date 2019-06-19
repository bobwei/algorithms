const toBinary = (num, nBits = 32) => {
  let output = '';
  for (let i = 0; i < nBits; i++) {
    output = ((num >> i) & 1) + output;
  }
  return output;
};

export default toBinary;
