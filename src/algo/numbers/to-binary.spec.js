import toBinary from './to-binary';

test('to-binary', () => {
  expect(toBinary(7, 8)).toEqual('00000111');
  expect(toBinary(-1, 8)).toEqual('11111111');
  expect(toBinary(-7, 8)).toEqual('11111001');
});
