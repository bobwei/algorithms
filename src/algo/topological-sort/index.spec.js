import sort from './index';

test('topological-sort', () => {
  const graph = [[], [], [3], [1], [0, 1], [0, 2]];
  console.log(sort(graph));
});

test('topological-sort', () => {
  const graph = [[1], [], [1]];
  console.log(sort(graph));
});

test('topological-sort', () => {
  const graph = [[1], [0]];
  console.log(sort(graph));
});
