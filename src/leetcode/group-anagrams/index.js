/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (const str of strs) {
    // prettier-ignore
    const key = str.split('').sort().join('');
    if (!(key in map)) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
};
