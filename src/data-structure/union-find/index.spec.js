import DisjointSet from './index';

test('DisjointSet', () => {
  const set = new DisjointSet(6);
  set.union(0, 5);
  set.union(1, 2);
  set.union(3, 4);
  set.union(1, 4);
  expect(set.find(0)).toEqual(set.find(5));
  expect(set.find(1)).toEqual(set.find(2));
  expect(set.find(2)).toEqual(set.find(3));
  expect(set.find(3)).toEqual(set.find(4));
});
