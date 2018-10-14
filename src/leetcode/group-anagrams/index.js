/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const createHashKey = (str) => {
  return str
    .split('')
    .sort()
    .join('');
};

var groupAnagrams = function(strs) {
  const cache = {};
  for (let i = 0; i < strs.length; i++) {
    const key = createHashKey(strs[i]);
    if (!cache[key]) {
      cache[key] = [];
    }
    cache[key].push(strs[i]);
  }
  return Object.values(cache);
};
