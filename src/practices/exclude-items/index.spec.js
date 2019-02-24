import exclude from './index';

test('exclude-items', () => {
  const items = [
    {
      color: 'red',
      name: 'test',
    },
    {
      color: 'blue',
      name: 'test2',
    },
    {
      color: 'yellow',
      name: 'test3',
    },
  ];
  const excludes = [
    {
      k: 'color',
      v: 'red',
    },
  ];
  const result = exclude(items, excludes);
  expect(result).toEqual([
    {
      color: 'blue',
      name: 'test2',
    },
    {
      color: 'yellow',
      name: 'test3',
    },
  ]);
  console.log(result);
});
