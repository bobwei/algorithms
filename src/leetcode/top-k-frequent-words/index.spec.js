import fn from './index';

test('top-k-frequent-words', () => {
  expect(fn(['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e'], 2)).toEqual(['a', 'b']);
});

test('top-k-frequent-words', () => {
  expect(fn(['a'], 1)).toEqual(['a']);
});
