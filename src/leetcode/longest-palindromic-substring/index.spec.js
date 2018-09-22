import fn from './index';

test('longest-palindromic-substring', () => {
  expect(fn('bbbabbb')).toEqual('bbbabbb');
});

test('longest-palindromic-substring', () => {
  expect(fn('bb')).toEqual('bb');
});

test('longest-palindromic-substring', () => {
  expect(fn('babad')).toEqual('aba');
});

test('longest-palindromic-substring', () => {
  expect(fn('babab')).toEqual('babab');
});
