import numberOfWaysStayingAtZero from './index';

test('numberOfWaysStayingAtZero', () => {
  expect(numberOfWaysStayingAtZero(3)).toEqual(7);
  expect(numberOfWaysStayingAtZero(4)).toEqual(19);
  expect(numberOfWaysStayingAtZero(5)).toEqual(51);
});
