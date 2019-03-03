/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  if (!words.length) {
    return [' '.repeat(maxWidth)];
  }
  // prettier-ignore
  return split(words, maxWidth)
    .map((row, i, arr) => {
      if (i < arr.length - 1) {
        return centerJustify(row, maxWidth);
      }
      return leftJustify(row, maxWidth);
    });
};

function split(words, maxWidth) {
  const output = [];
  let start = 0;
  let n = 0;
  for (let i = 0; i < words.length; i++) {
    // length of characters + length of minimum number of spaces
    const rowLength = n + words[i].length + (i - start);
    if (rowLength > maxWidth) {
      output.push(words.slice(start, i));
      start = i;
      n = 0;
    }
    n += words[i].length;
  }
  if (start < words.length) {
    output.push(words.slice(start));
  }
  return output;
}

function centerJustify(strs, maxWidth) {
  const nChars = strs.reduce((acc, cur) => acc + cur.length, 0);
  const nTotalSpaces = Math.max(1, strs.length - 1);
  let spaceLength = 0;
  while (nChars + (spaceLength + 1) * nTotalSpaces <= maxWidth) {
    spaceLength += 1;
  }
  const nExtraSpaces = maxWidth - (nChars + spaceLength * nTotalSpaces);
  const nSpaces = nTotalSpaces - nExtraSpaces;
  let output = strs[0];
  let i = 1;
  for (let j = 0; j < nExtraSpaces; j++) {
    output += ' '.repeat(spaceLength + 1) + (strs[i] || '');
    i += 1;
  }
  for (let j = 0; j < nSpaces; j++) {
    output += ' '.repeat(spaceLength) + (strs[i] || '');
    i += 1;
  }
  return output;
}

function leftJustify(strs, maxWidth) {
  const nChars = strs.reduce((acc, cur) => acc + cur.length, 0);
  const nExtraSpaces = maxWidth - (nChars + 1 * (strs.length - 1));
  return strs.join(' ') + ' '.repeat(nExtraSpaces);
}
