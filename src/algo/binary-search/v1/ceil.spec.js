import ceil from './ceil';

test('ceil', () => {
  expect(ceil([1, 3, 4, 6, 7, 8, 9], 5)).toEqual(3);
  expect(ceil([1, 3, 4, 6, 7, 8, 9], 4)).toEqual(2);
});
