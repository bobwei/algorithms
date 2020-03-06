/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  return S.split(' ')
    .map(mapper)
    .join(' ');
};

function mapper(word, i) {
  if (isVowel(word[0])) {
    return word + 'ma' + 'a'.repeat(i + 1);
  }
  const [first, ...rest] = word;
  return rest.join('') + first + 'ma' + 'a'.repeat(i + 1);
}

function isVowel(c) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  return set.has(c);
}
