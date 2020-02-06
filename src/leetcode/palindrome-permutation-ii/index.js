/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  const freq = createFreq(s);
  let oddChar = '';
  for (const c in freq) {
    if (freq[c] % 2 === 1) {
      if (!oddChar) {
        oddChar = c;
        freq[c] -= 1;
        if (freq[c] <= 0) {
          delete freq[c];
        }
      } else {
        return [];
      }
    }
  }
  const arr = [];
  for (const c in freq) {
    arr.push(...c.repeat(freq[c] / 2).split(''));
  }
  return permute(arr).map((result) => result.join('') + oddChar + result.reverse().join(''));
};

function permute(arr, selected = new Set(), output = []) {
  if (selected.size === arr.length) {
    output.push([...selected].map((i) => arr[i]));
    return output;
  }
  for (let i = 0; i < arr.length; i++) {
    if (selected.has(i) || (arr[i] === arr[i - 1] && !selected.has(i - 1))) {
      continue;
    }
    selected.add(i);
    permute(arr, selected, output);
    selected.delete(i);
  }
  return output;
}

function createFreq(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  return freq;
}
