import fn from './index';

test('pow(2, 10)', () => {
  expect(fn(2, 10)).toEqual(1024);
});

test('pow(2, -10)', () => {
  expect(fn(2, -10)).toEqual(0.0009765625);
});
