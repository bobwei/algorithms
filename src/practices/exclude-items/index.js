const exclude = (items, excludes) => {
  const query = excludes.reduce((acc, cur) => {
    const { k, v } = cur;
    if (!(k in acc)) acc[k] = new Set();
    acc[k].add(v);
    return acc;
  }, {});
  return items.filter((item) => {
    for (const key in query) {
      if (key in query && query[key].has(item[key])) {
        return false;
      }
    }
    return true;
  });
};

export default exclude;
