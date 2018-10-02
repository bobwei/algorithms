import fn from './index';

test('generate-parentheses', () => {
  expect(fn(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
