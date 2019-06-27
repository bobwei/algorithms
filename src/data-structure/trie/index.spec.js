import Trie from './index';

test('Trie', () => {
  const trie = new Trie();
  const data = ['app', 'apple', 'applepen'];
  data.map((word) => trie.add(word));
  expect(trie.dfs()).toEqual(data);
  expect(trie.startsWith('app')).toEqual(true);
  expect(trie.startsWith('appl')).toEqual(true);
  expect(trie.startsWith('apple')).toEqual(true);
  expect(trie.search('appl')).toEqual(false);
  expect(trie.search('applepen')).toEqual(true);
});
