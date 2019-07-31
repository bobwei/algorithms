import add from './index';

test('add-hexadecimal', () => {
  expect(add('a', 'a')).toEqual('14');
  expect(add('abcd', 'deff')).toEqual('18acc');
});
