import Trie from './index';

test('Trie', () => {
  const trie = new Trie();
  trie
    .insert('apple')
    .insert('app')
    .insert('applepen');
  const result = trie.dfs();
  expect(result).toEqual(['app', 'apple', 'applepen']);
});
