import render from './index';

test('render template', () => {
  expect(
    render('hello {var1}, yo {var2}', {
      var1: 'world',
      var2: 'test123',
    }),
  ).toEqual('hello world, yo test123');
});

test('render template', () => {
  expect(
    render('hello {var1}, yo {var2}', {
      var1: 'xyz',
      var2: 'abc',
    }),
  ).toEqual('hello xyz, yo abc');
});
