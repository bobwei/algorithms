function deepFilter(obj, filter) {
  const map = {};
  for (const key in obj) {
    const isObject = typeof obj[key] === 'object';
    if (isObject) {
      const result = deepFilter(obj[key], filter);
      if (Object.keys(result).length) {
        map[key] = result;
      }
    } else if (!isObject && filter(obj[key])) {
      map[key] = obj[key];
    }
  }
  return map;
}

export default deepFilter;
