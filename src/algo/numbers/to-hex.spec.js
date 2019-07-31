import toHex from './to-hex';

test('to-hex', () => {
  expect(toHex(10)).toEqual('0xa');
  expect(toHex(123)).toEqual('0x7b');
  expect(toHex(456)).toEqual('0x1c8');
  expect(toHex(0)).toEqual('0x0');
});
