import SortedMap from './index';

test('SortedMap', () => {
  const map = new SortedMap();
  expect(map.get('k1')).toEqual(null);
  map.set('k1', 'v1');
  expect(map.get('k1')).toEqual('v1');
  map.set('k3', 'v3');
  map.set('k2', 'v2');
  expect(map.keys()).toEqual(['k1', 'k2', 'k3']);
});
