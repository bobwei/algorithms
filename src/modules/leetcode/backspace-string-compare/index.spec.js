import fn from './index';

test('backspace-string-compare', () => {
  expect(fn('ab#c', 'ad#c')).toEqual(true);
});

test('backspace-string-compare', () => {
  expect(fn('xywrrmp', 'xywrrmu#p')).toEqual(true);
});
